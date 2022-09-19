import { createEffect, createResource, createSignal, For } from "solid-js"
import { UserCard } from "../components/userCard"
import { deserializeUserListProto } from "../helpers/deserializer"
import { User } from "../utils/types"
import type { Component } from 'solid-js';

// TODO: figure out how to get the keys of User type
const UserKeys: userKey[] = ['name', 'email', 'age', 'active']
type userKey = keyof User

const fetchUsers = async () => {
    const users = await fetch('http://localhost:1323/users/all')
    const deserializedUsers = await deserializeUserListProto(users.body)
    if (deserializedUsers) {
        return deserializedUsers
    }
    return []
}

export const UserList: Component = () => {
    const [users] = createResource(fetchUsers, {})

    createEffect(() => {
        if (!users.loading)
            setState((users() as User[]))
    })
    const [state, setState] = createSignal<User[]>([])
    const [sortKey, setSortKey] = createSignal<{ key: userKey | null, isAscending: boolean }>({ key: null, isAscending: true })

    const sortUsers = (key: keyof User) => {
        const isAscendingNew: boolean = sortKey().key === key ? !sortKey().isAscending : true
        const sortedUsers = state()?.sort((a, b) => {
            if (a[key] < b[key]) {
                return -1 * (isAscendingNew ? 1 : -1)
            }
            if (a[key] > b[key]) {
                return 1 * (isAscendingNew ? 1 : -1)
            }
            return 0
        })
        setState([...sortedUsers])
        setSortKey({ key, isAscending: isAscendingNew })
    }

    return (
        <div>
            <h1 class="text-2xl">User List</h1>
            <span>{users.loading && "Loading..."}</span>
            {!users.loading && <div>
                <div class="table table-auto w-11/12 pt-4">
                    <div class="table-row">
                        <For each={UserKeys}>
                            {(key: userKey) => <span class="table-cell text-center border-red-400 border-solid border-2 cursor-pointer py-2 align-center" onClick={() => sortUsers(key)}>{key}</span>}
                        </For>
                    </div>
                    <For each={state()} fallback={<span>No users found</span>}>
                        {(user: User) => <UserCard user={user} />}
                    </For>
                </div>
            </div>}
        </div >
    )
}
