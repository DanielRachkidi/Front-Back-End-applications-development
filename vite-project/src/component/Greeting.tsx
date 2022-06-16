import { useState } from 'react'
//import logo from './logo.svg'


type GreetingsParams = {
    name: String,
    lastname: String,
    age?: number
  
}
const Greeting =({name, lastname, age=5}: GreetingsParams) => {
 //   let name = "Dylan";
  return <h2>Hello {name} {lastname} {(age+30)} !</h2>
}
export default Greeting
