import React, { useState } from 'react'

function Eligible() {

  let [age, setAge] = useState(0)
  let [user, setUser] = useState("Not Voting")

  let Increment = () => {
    setAge(age + 1)
  }
  let Decrement = () => {
    setAge(age - 1)
  }

  let Update = () => {
    if (age >= 18) {
      setUser("Voting")
    } else {
      setUser("Not Voting")
    }
  }


  return (
    <div style={{ margin: "100px" }}>

      <h1>Age : {age}</h1>
      
      <h1>Eligable for  : {age >= 18 ? "Voting" : "Not Voting"}</h1>
      <button onClick={Increment}>click +</button>
      <button onClick={Decrement}>click -</button>
    </div>
  )

}

export default Eligible
