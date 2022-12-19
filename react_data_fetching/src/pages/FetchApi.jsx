import React, {useState, useEffect} from 'react'

export default function FetchApi() {


  //state
  const[users, setUsers] = useState([]);

  //function fetch
  const getUserData = async ()=>{
    try{
      const result = await fetch("https://localhost:7229/api/Customer/GetAllPrice", {
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
          
        }
      })

      const data = await result.json()
      return data;

    }
    catch (error){
      return error
    }
  }

  //component did mount
  useEffect(()=>{

    getUserData()
    .then((res)=>{
      setUsers(res)
    })
    .catch((err)=>{console.error(err)})    

  },[])

  return (
    <div className='App'>

      <h1>Fetch Api</h1>
      {user.map((e)=>(

        <div>
          <h3>{}</h3>
          <p>{}</p>
        </div>
      ))}

    </div>
  )
}
