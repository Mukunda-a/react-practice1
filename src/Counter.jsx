import React, { useState } from 'react'

function Counter() {

    let [count,setCount]=useState("") 

    let updateCountByFive=()=>
    {
        for(let i=1,i<5,i++)

        // setCount(count+1)
        setCount(previousCount)=>
        {
            return 
            previouscount+1
        }
    }
    
    return (
    <div>
<h1>count:{count}</h1>
<button>count one</button>
<button>count five</button>

    </div>
  )
}

export default Counter