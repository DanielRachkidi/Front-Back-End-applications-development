import React, {useState} from 'react'

const Button = () =>{
    const [count, setCount] = useState(0)

    const onclickhandler = (event) =>{
        setCount(count+1)
    }

    return (<><div>{count}</div>
    <button onClick={onclickhandler}>ADD</button>

    
    </>)
}

export default Button 