import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

export default function BlogDetail(){

    const {id, slug} = useParams()

    const [det, setDat] = useState()

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{
            setDat(res.data)
        })
        .catch((err)=>{
            console.info(err)
        })
    },[])


    if (!det){
        return(
            <h1>Loading</h1>
        )
    }

    

    return(
        <MainLayout key={det.id}>

            <h1> {det.title} </h1>
            <p>{det.body}</p>

        </MainLayout>
    )
}