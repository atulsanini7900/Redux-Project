"use client"

import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice"

const UserList = () => {
  const userData=useSelector((data)=>data.users)
  const dispatch=useDispatch();
  console.log(dispatch);
  return (
    <div>
      
      <h1>UserList</h1>

      {
        userData.map((data)=>(
          <div className="list-container">
            <span>{data.name}</span>
            <button onClick={()=>dispatch(removeUser(data.id))}>Remove</button>
          </div>
        ))
      }
     
    </div>
  )
}

export default UserList