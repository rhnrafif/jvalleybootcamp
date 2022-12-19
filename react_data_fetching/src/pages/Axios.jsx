import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function Axios() {
  
    //state
    const [post, setpost] = useState([]);

    //get post data
    const getPostData = async ()=>{
        try{
            const result = await axios("https://localhost:7229/api/Customer/GetAllPrice?Page=1&PageSize=10")
            return result;
        } catch (error){
            return error
        }
    }
  
  
    //cdm
    useEffect(()=>{
        getPostData()
        .then((res)=>{
            console.info(res.data.data.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])
  
    return (
    <div className='App'>
        <h1>Axios</h1>
    </div>
  )
}
