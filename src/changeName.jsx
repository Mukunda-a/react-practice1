import React from 'react'

function changeName() {






setSname("Leela")
}
return(
    <div>
        {console.log("rendered")}
        <h1>Name:{sname} </h1>
        <button onclick={updateName1}>Sheela</button>
        <button onclick={updateName2}>Leela</button>
    
    
    </div>
)

export default changeName
