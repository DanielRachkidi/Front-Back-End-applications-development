import React, {useEffect, useState, FormEvent, ChangeEvent} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { editMessageParams } from '../types/message'
import { getMessage, updateMessage } from '../services/message'

const MessagesEditPage = () => {
  let {id} = useParams()
  let navigate = useNavigate()

  const [form, setForm] = useState<editMessageParams>({
    _id: '',
    name: ''
  })

  useEffect(() => {
    const getData = async() => {
      const res = await getMessage(id)
      
      if (typeof res == "object") {
        setForm({
          _id: res._id,
          name: res.name
        })
      }
    }

    getData()
  }, [])

  const onSubmitHandler = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await updateMessage(form)
    navigate('/Messagespage')
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value}: {name: string, value: string} = event.target 
    setForm({...form, [name]: value})
  }

  return (<form onSubmit={onSubmitHandler}>
      <div> the message was edit</div>

      <div className="form-row">
          <label>New Name</label>
          <input 
              type="text"
              name="name"
              value={form.name}
              onChange={onChangeHandler}
          />
      </div>

      <div className="form-row">
          <button type='submit'>submit</button>
      </div>
    </form>)
}

export default MessagesEditPage