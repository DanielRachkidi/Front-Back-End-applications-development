import React, {useEffect, useState} from 'react'

type users={

  id?:number,
  name: string,
  username: string
}
const  Resources = () => {
    const [joke, setJoke] = useState(null)
useEffect(() =>{

    const getData =  () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        //const responsejson = await res.json()
        //setJoke(responsejson.json)
        .then((response) => response.json())
      .then((json) => console.log(json));
        
    }
    getData()
}, [])


  return (
    <div>{joke}</div>
  )
}

export default Resources


