import React, {useEffect, useState} from 'react'


const  Resources = () => {
  const [jokes, setJoke] = useState([])
  useEffect(() =>{
      const getData = async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/users')
          const responsejson = await res.json()
          setJoke(responsejson)
          console.log(responsejson)

      }

      getData()
  }, [])

  // photos = photos.map(item => Object.values(item));



  return (<>
    <ul>
        { jokes.map( (jk, index) =>
        <li key={`jk-${index}`}>
            {jk.email}
        </li>)}
    </ul>
  </>)
}

export default Resources


