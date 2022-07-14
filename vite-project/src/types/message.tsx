import { User } from "./user"

export type Message = {
    name: string,
    _id: string,
    user: User,
    created_at: Date,
    update_at: Date,
    _v: number

    
}


export type editMessageParams = {
    name: string,
}
