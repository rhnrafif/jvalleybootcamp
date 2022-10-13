import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home(){

    //buat  state penyimpanan data API
    const [blogData, setBlogData]= useState([])

    //component did mount
    useEffect(()=>{

        //hit API json server local host
        axios.get('http://localhost:3000/blogs')
        .then((res)=>{
            // console.info(res.data)
            setBlogData(res.data)
        })
        .catch((err)=>{
            console.error(err)
        })
    },[])

    return(
        <div className="container">
            <section className="wrapper">
                <div className="blog_wrapper">

                    <h1>Home Page</h1>
                    <h2>List Nama Mantan</h2>

                    {blogData.map((e)=>{
                        return(
                            <div className="blog_card" key={e.id}>
                                <h3>{e.title}</h3>
                                <img src={e.banner} alt={e.title} />

                                <Link to={`/blog/detail/${e.id}/${e.slug}`} >Detail</Link>

                            </div>

                        )
                    })}
                </div>

            </section>            

        </div>
    )
}