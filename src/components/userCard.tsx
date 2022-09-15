import { User } from "../utils/types"

export const UserCard = ({ user }: { user: User }) => {
    return (
        <>
            <h1>{user.Name}</h1>
            <p>{user.Email}</p>
            <p>{user.Age}</p>
        </>
    )
}
