import React, {useState} from "react";

function StateAsObject() {
    

    let [userDetails,setUserDetails]= useState({firstname:'' ,lastname:'' ,email:'' ,password:'',dob:''})
    
    let changeFirstname=({target})=>
    {
        setUserDetails({...userDetails,firstname:target.value}) 
    }
    let changeLastname=({target})=>
    {
        setUserDetails({...userDetails,lastname:target.value}) 
    }
    let changeEmail=({target})=>
    {
        setUserDetails({...userDetails,email:target.value}) 
    }
    let changePassword=({target})=>
    {
        setUserDetails({...userDetails,password:target.value}) 
    }
    let changeDob=({target})=>
    {
        setUserDetails({...userDetails,dob:target.value}) 
    }
    
    return(
        <div>
            {console.log(userDetails)}
            <h1>First_name:"{userDetails.firstname}" Last_name:"{userDetails.lastname}" Email:"{userDetails.email}" Password:"{userDetails.password}" DOB:"{userDetails.dob}" </h1>

            <input type="text" placeholder="first name" value={userDetails.firstname} onChange={changeFirstname}/> <br />
            <input type="text" placeholder="last name" value={userDetails.lastname} onChange={changeLastname}/>
            <br />
            <input type="email" placeholder="Email" value={userDetails.email} onChange={changeEmail}/> <br />
            <input type="password" placeholder="Password" value={userDetails.password} onChange={changePassword}/> <br />
            <input type="date" placeholder="Date of birth" value={userDetails.dob} onChange={changeDob}/>
            {/* <input type="radio" placeholder="" value={userDetails.dob} onChange={ChangeDob}/> */}
        </div>
    )
}
export default StateAsObject