import React,{useState} from 'react'

function InputValue() {

let [user, setUser]= useState("")

let UpdateUserName=(e)=>{

    setUser(e.target.value);
}


  return (
    <div style={{margin:"100px"}}>

        <input type="text" placeholder="userName" value={user} onChange={UpdateUserName}/>

        <h1>Data Here: {user}</h1>

        {/* <button onClick={UpdateUserName}>click</button> */}
    </div>
  )
}

export default InputValue