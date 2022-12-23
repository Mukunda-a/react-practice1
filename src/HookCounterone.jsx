import React,{useState} from 'react'

function HookCounterone() {

    const [count, setCount]= useState(0)
  return (
    <div>
    <h1>count={count}</h1>
 <button onClick ={()=>{setCount(count+1) }}>count{count} </button>
    </div>
  )
}

export default HookCounterone