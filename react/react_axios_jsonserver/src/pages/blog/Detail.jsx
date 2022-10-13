import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Detail(){

    // menangkap parameter id dari url
    const {id} = useParams()

    // membuat state penyimpanan
    const [detailBlog, setDetailBlog] = useState()
    
    // component did mount
    useEffect(()=>{
        axios.get(`http://localhost:3000/blogs/${id}`)
        .then((res)=>{
            setDetailBlog(res.data)
        })
        .catch((err)=>{
            console.error(err)
        })
    },[])
    

    // loading state - conditional rendering
    if(!detailBlog){
        return(
            <div className="loading_screen">
                Loading...
            </div>
        )
    }



    return(
        <div className="container">

            <section className="wrapper">

                <h1>{detailBlog.title}</h1>
                <img src={detailBlog.banner} alt={detailBlog.title} />
                <p>{detailBlog.body}</p>

            </section>            

        </div>
    )
}