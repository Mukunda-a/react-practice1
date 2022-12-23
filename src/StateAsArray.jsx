import React,{useState} from 'react'

function StateAsArray() {

let [items,setItems]=useState([])
let [item,setItem]=useState("");
const [count, setcount] = useState(0)

let addItem= ({target:{value}})=>
{
    setItem(value)
}

let updateItems=()=>
{
    setItems([item,...items])
    setcount(count+1)
}
let deleteItem=(index)=>{

    items.splice(index,1)
    setItems([...items])
    setcount(count-1)


}

  return (
    <div>
   
   <input type="text" placeholder='Enter the item name' onChange={addItem}/>
  <button onClick={updateItems}>Add</button>
  <h1>cart : {count}</h1>

  {items.map((item,index)=>
  {
    return<div key={index}>
    <li>{item}</li>
    <button onClick={()=>{deleteItem(index)}}>delete</button>
    </div>
  })}
  

    </div>
  )
}

export default StateAsArray;