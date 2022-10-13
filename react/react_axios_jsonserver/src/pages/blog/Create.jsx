import axios from "axios";
import React from "react";


export default function Create(){

    //logic untuk menangkap input
    const handleSubmit = (e)=>{
        e.preventDefault()

        const title = e.target.title.value;
        const slug = e.target.slug.value;
        const body = e.target.body.value;
        const banner = e.target.banner.value;

        // validator
        if(!title || !slug || !body || !banner){
            return alert("Silahkan lengkapi dan isi data dengan benar !")
        }

        //push data ke server JSON
        //jika data table backend sama dengan variabel, bisa menggunakan satu baris untuk data nya

        axios.post('http://localhost:3000/blogs', {title, slug, body, banner})
        .then((res)=>{
            alert('Banner berhasil ditambahkan')
            window.location.href = '/'
        })
        .catch((err)=>{
            alert('Terjadi kesalahan')
            console.error(err)
        })

    }



    return(
        <div className="container">

            <section className="wrapper">

                <h1>Create Blog Page</h1>

                <form className="blog_form" onSubmit={handleSubmit}>

                    <div className="form_group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="slug">Slug</label>
                        <input type="text" id="slug" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="banner">Banner</label>
                        <input type="text" id="banner" />
                    </div>

                    <div className="form_group fg_textarea">
                        <label htmlFor="body">Caption</label>
                        <textarea id="body" ></textarea>
                    </div>

                    <button type="submit" >Submit</button>

                </form>

            </section>            

        </div>
    )
}