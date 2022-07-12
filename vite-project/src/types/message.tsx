import { User } from "./user"

export type Messages = {
    name: string,
    _id: string,
    user: User,
    created_at: Date,
    update_at: Date,
    _v: number

    
}