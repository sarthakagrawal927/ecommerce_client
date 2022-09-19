import { User } from "../utils/types"

export const UserCard = ({ user }: { user: User }) => {
    const { name, email, age, active } = user
    return (
        <div class="table-row">
            <span class="table-cell text-center">{name}</span>
            <span class="table-cell text-center">{email}</span>
            <span class="table-cell text-center">{age}</span>
            <span class="table-cell text-center border-black border-solid border-2 cursor-pointer py-2 align-center" onClick={() => {
                console.log("clicked")
            }}>{active ? 'Deactivate' : 'Activate'}</span>
        </div>
    )
}
