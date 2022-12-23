import React, {useState }from 'react'

function StateAsObject() {

    // let [username, setUsername]= useState("")
    // let [password, setPassword]= useState("")

    let [userDetails,setUserDetails]=useState({username:"",password:""})

    let changeUserDetails=({target:{name,value}})=>
    {
        setUserDetails({...userDetails,[name]:value})
    }
    
    // let changePassword=({target})=>
    // {
    //     set({...userDetails,password:target.value})
    // }

  return (
    <div>
    {console.log(userDetails)}
    <h1>{JSON.stringify(userDetails)} </h1>
    <input  type="text"  placeholder='Username' name='username' value={userDetails.username}
        onChange={changeUserDetails}
    />
    <input type="password"  placeholder='Password' name='password' value={userDetails.password}

      onChange={changeUserDetails}

    />

    </div>
  )
}

export default StateAsObject
