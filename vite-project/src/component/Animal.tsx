import React from 'react'




const Animal =() => {
    //   let name = "Dylan";
    let animals:string[] = ['Lion', 'Tiger', 'cat']
     return (<>

        <div> My animal list </div>
        <ul>
       { animals.map((animal, index) => <li key={`animal-${index}`}>{index } + {animal}</li>)}
       </ul>
       </>
     )
   }
   export default Animal
   