import { User } from "../utils/types"

export const UserCard = ({ user }: { user: User }) => {
    return (
        <>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.age}</p>
        </>
    )
}
