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

type Photo ={

  albumId: BigInteger

  id: BigInteger

  title: String

  url: String

  thumbnailurl: String

}








const Resources = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [photos, setPhotos] = useState<Photo[]>([])

   



    useEffect(() => {

        const getData = async () => {

          const res  =  await fetch('https://jsonplaceholder.typicode.com/photos')

          const responseJson: Photo[] = await res.json()

          console.log(responseJson)

          setPhotos(responseJson)

          setIsLoading(false)

        }

        getData()

    },[])



  return (<>

    {isLoading && <div>please wait data is loading</div>}

    {!isLoading && <div> {photos.map((photo:Photo , index: number) => <div key={`photos-${index}`}>

{photo.title}
</div>)}

</div>}
    

  </>)

    }





export default Resources


