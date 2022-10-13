import axios from "axios";
import Navbar from "../components/Navbar";

const app = document.getElementById('app');

export default function Home(){

    //ubah document title
    document.title = "Home Page";

    axios.get('http://localhost:3000/blogs?_sort=id&_order=desc',)
    .then((res)=>{
        app.innerHTML += Navbar();
        app.innerHTML += `<div class="container flex justify-center"></div>`
        res.data.forEach((e)=>{
            app.innerHTML +=`
            
            <a href="/details?id=${e.id}" class="bg-white p-6 flex flex-col rounded-md my-6 max-w-[700px] shadow-md mx-auto">
                <h1 class="text-2xl text-gray-900">${e.judul}</h1>
                <small>${e.author}</small>
                <img class="h-[280px] object-cover my-4 rounded-lg" src="${e.img}" alt="${e.judul}"/>
                <p>${e.content}</p>
            </a>
            
            `
        })
    })
    .catch((err)=>{
        console.error(err)
    })
}