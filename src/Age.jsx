import React,{useState} from 'react'
// import Eligible from './Eligible'


function Age() {

    let [age,setAge]=useState(0)

let incrementAge=()=>{

    setAge(age+1)
}

let decrementAge= ()=>{
    setAge(age-1)
}



  return (
    <div> 
      <h1>Age:{age} </h1>
      <button onClick={incrementAge}>+</button>
      <button onClick={decrementAge}>-</button>
      <button onClick={()=>(setAge(0))}>Reset</button>

      
          </div>
  )
}

export default Age
