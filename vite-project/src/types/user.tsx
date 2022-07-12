import { Messages } from "./message"

export type User = {
    username: string,
    email: string,
    password: string,
    active: boolean,
    messages:[Messages],
    created_at: Date,
    update_at: Date,
    _v: number
}