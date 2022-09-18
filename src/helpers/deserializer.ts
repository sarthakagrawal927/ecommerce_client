import { User } from "../utils/types"
import { main } from "./../models"

export async function deserializeUserListProto(data: ReadableStream<Uint8Array> | null): Promise<User[] | undefined> {
    const streamReader = data?.getReader()

    return await streamReader?.read().then(result => {
        if (result.done) {
            return
        }
        const uint8Array = result.value
        const UserListProto = main.UserListProto.deserializeBinary(uint8Array)

        return UserListProto.toObject().users as User[]
    })
}
