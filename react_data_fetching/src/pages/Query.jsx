import React from 'react'
import { useQuery } from "@tanstack/react-query"

export default function Query() {

     const getUserData = async ()=>{
    try{
      const result = await fetch("https://localhost:7229/api/Customer/GetAllPrice?Page=1&PageSize=10", {
        method : "GET",
        headers : {
          "Content-Type" : "application/json"          
        }
      })
      const data = await result.json()
      return data;
    }
    catch (error){
      return error
    }   
  }
  //react query
    const { data, isLoading, isError, refetch } = useQuery(['user_data'], getUserData , {staleTime : 60000})

    //jika fetch melakukan proses loading
    if(isLoading){
        return <div className='App'> Loading.. Please Wait... </div>
    }

    //jika fetch mengalami kendla
    if(isError){
        return <div className='App'> Terjadi Kendala saat mengambil data...</div>
    }

  return (
    <div className='App'>
        <h1>React Query</h1>
        {data.data.data.map((e, i)=>(
            <div key={i}>
                <h3>{e.tukangName}</h3>
            </div>
        ))}
    </div>
  )
}
