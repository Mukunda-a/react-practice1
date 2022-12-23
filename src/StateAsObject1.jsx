import React, {useState} from "react";

function StateAsObject1() {
    

    let [userDetails,setUserDetails]= useState({firstname:'' ,lastname:'' ,email:'' ,password:'',dob:''})
    
    let changeUserDetails=({target:{name,value}})=>
    {
        setUserDetails({...userDetails,[name]:value}) 
    }
 
    return(
        <div>
            {console.log(userDetails)}
            <h1>{JSON.stringify(userDetails)}</h1>

            <input type="text" placeholder="first name" name="firstname" value={userDetails.firstname} onChange={changeUserDetails}/> <br />
            <input type="text" placeholder="last name" name="lastname" value={userDetails.lastname} onChange={changeUserDetails}/>
            <br />
            <input type="email" placeholder="Email" name="email" value={userDetails.email} onChange={changeUserDetails}/> <br />
            <input type="password" placeholder="Password" name="password" value={userDetails.password} onChange={changeUserDetails}/> <br />
            <input type="date" placeholder="Date of birth" name="dob" value={userDetails.dob} onChange={changeUserDetails}/>
            {/* <input type="radio" placeholder="" value={userDetails.dob} onChange={ChangeDob}/> */}
        </div>
    )
}
export default StateAsObject1