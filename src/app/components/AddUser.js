"use client"

import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";

const AddUser = () => {
    const [name, setName]=useState("");
    const dispatch=useDispatch();
    function handleSubmit(){
      dispatch(addUser(name))
        // console.log(name);
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