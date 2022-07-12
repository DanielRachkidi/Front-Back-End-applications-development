import React from 'react'
import axios, {AxiosError} from 'axios'
import { Messages } from '../types/message'


export const getmessage = async () => {
    try {
       const res = await axios.get('http://127.0.0.1:4500/messages')
        return res.data
    } catch(error: any) {
        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg);
        } else {
            console.error(error);
        }
        return false
    }
    
}