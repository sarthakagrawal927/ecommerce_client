import { createResource } from "solid-js"
import { UserCard } from "../components/userCard"
import { User } from "../utils/types"

const fetchUsers = async () => (await fetch('http://localhost:1323/users/all')).json()

export const UserList = () => {
    const [users] = createResource({}, fetchUsers)
    return <div>
        <span>{users.loading && "Loading..."}</span>
        <pre>{!users.loading && users().map((user: User) => {
            return <UserCard user={user} />
        })}</pre>
    </div>
}
