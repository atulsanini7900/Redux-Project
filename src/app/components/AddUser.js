"use client"

import { useState } from "react"

const AddUser = () => {
    const [name, setName]=useState("");
    function handleSubmit(){
        console.log(name);
    }
  return (
    <div>
        <input type="text" 
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter User Name"></input>
        <button onClick={handleSubmit}>Add User</button>
    </div>
  )
}

export default AddUser