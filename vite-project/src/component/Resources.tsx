import React, {useEffect, useState} from 'react'

/*
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




  return (<>
    <ul>
        { jokes.map( (jk, index) =>
        <li key={`jk-${index}`}>
            {jk.email}
        </li>)}
    </ul>
  </>)
}*/
type Joke = {
  icon_url: string,
  id: string,
  url: string,
  value:string,
  created_at: string
  updated_at:string
}

type JokeResponseJson = {
  result: Joke[],
  total: number
}







const Resources = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [jokes, setJokes] = useState<Joke[]>([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://api.chucknorris.io/jokes/search?query=blood')
      const responseJson:JokeResponseJson = await res.json()

      setJokes(responseJson.result)
      setIsLoading(false)
    }

    getData()
  }, [])

  return (
    <>
      {isLoading && <div>Please wait, data are loading...</div>}
      
      {!isLoading && <div>
        {jokes.map((joke:Joke, index:number) => <div className='joke' key={`jokes-${index}`}>
          {joke.value}
        </div>)}  
      </div>}
    </>
  )
}




export default Resources


