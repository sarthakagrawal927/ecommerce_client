import { createResource } from "solid-js"
import { UserCard } from "../components/userCard"
import { deserializeUserListProto } from "../helpers/deserializer"
import { User } from "../utils/types"

const fetchUsers = async () => {
    const users = await fetch('http://localhost:1323/users/all')
    const deserializedUsers = await deserializeUserListProto(users.body)
    return deserializedUsers
}

export const UserList = () => {
    const [users] = createResource({}, fetchUsers)

    return <div>
        <span>{users.loading && "Loading..."}</span>
        <pre>{!users.loading && users()?.map((user: User) => {
            return <UserCard user={user} />
        })}</pre>
    </div>
}
