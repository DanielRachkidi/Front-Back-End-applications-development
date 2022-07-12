import React from 'react'
import { useEffect, useState } from 'react'
import { getmessage } from '../services/message'
const Messagespage = () => {
  const [message, setMessages] = useState('')

  useEffect(() => {
    const getData = async () => {
      const messages = await getmessage()

   
    }
getData
console.log(message)  
  },
  [])
  return (
    <div>Messagespage</div>
      // (message []) => <div className='joke' key={message._id}>
      // {message.map(( ) => {
      //    <div key={message._id}>{message}</div>;
      // }

  )
}

export default Messagespage