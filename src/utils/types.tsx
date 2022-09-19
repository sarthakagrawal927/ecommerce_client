import { main } from "../models";

// responsible for omitting fields from protoBuff class
type OmitGet<T> = { [K in keyof T as K extends keyof OmmittableFields ? never : K]: T[K] }

type OmmittableFields = {
    toObject: any
    serialize: any
    serializeBinary: any
    serializeBinaryExtensions: any
    toArray: any
    setExtension: any
    clone: any
    cloneMessage: any
    getExtension: any
    readBinaryExtension: any
    getJsPbMessageId: any
    toString: any
}

export type User = OmitGet<main.UserProto>