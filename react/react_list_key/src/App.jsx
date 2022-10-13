import React, {useState, useEffect} from "react";
import axios from "axios";
import UserCard from "./components/UserCard";

export default function App(){

  //state
  const [users, setUsers] = useState([])

  //component didMount
  useEffect(()=>{

    // hit api json placeholder
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      console.info(res)

      // update value dari users
      setUsers(res.data)

    })
    .catch((err)=>{
      console.error(err)
    })

  },[])

  return(
    <div>
      <h1>Hello App</h1>

      {users.map((item)=>{
        
        // render ke jsx
        return(
          <UserCard 
          name={item.name} 
          phone={item.phone} 
          email={item.email} 
          key={item.id} />
        )
      })}
    </div>
  )
}