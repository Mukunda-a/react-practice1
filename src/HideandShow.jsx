import React,{useState} from 'react'
 import Dog from './images/DogImage.jpg'

function HideandShow() {
let [hidden,setHidden] =useState(true)
// let hideImage=()=> {
//     setHidden(false)
// }
// let showImage=()=>
// {
//     setHidden(true)
// }
let toggleImage=()=>
{
    setHidden(!hidden)
}
  return (
    <div>

  {hidden?<img src={Dog} alt="" />:""}
  <button onClick={toggleImage}>{hidden?"Hide":"Show"} </button>

 

    </div>
  )
}

export default HideandShow