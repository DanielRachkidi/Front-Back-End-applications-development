import React from 'react'

import Greeting from "../component/Greeting"
import Animal from '../component/Animal'

const Home = () => {
    const count = 10
  return (<>
    <Greeting name="kime" lastname= "" age = {count }/>
    <Animal/>
</>)
}

export default Home