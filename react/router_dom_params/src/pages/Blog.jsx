import React from "react";
import MainLayout from "../layouts/MainLayout";
import axios from 'axios';
import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";

export default function Blog(){

    // state untuk menampung data dari API
    const [ content, setContent]= useState([]);

    //component didmount
    useEffect(()=>{

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{

            //set state untuk menjalankan did mount
            setContent(res.data)
        })
        .catch((err)=>{
            console.error(err)
        })

    }, [])

    

    return(
        <MainLayout>

            <h1> Blog Page </h1>

            <div className="blog_wrapper">

                {content.map((e)=>{
                    return(
                        <span key={e.id} >
                            <h3>{e.title}</h3>
                            <p>{e.body}</p>

                            <Link to={`/blog/${e.id}/${e.title}`}>Detail</Link>
                        </span>
                    )
                })}

            </div>

        </MainLayout>
    )
}