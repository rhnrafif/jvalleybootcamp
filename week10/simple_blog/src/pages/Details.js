import axios from "axios";
import Navbar from "../components/Navbar";

const app = document.getElementById('app');
export default function Details(){

    //mengambil nilai query param
    let params = new URLSearchParams(window.location.search)
    let _id = params.get("id");

    axios.get(`http://localhost:3000/blogs/${_id}`)
    .then((res)=>{
        app.innerHTML += `
    ${Navbar()}
    <div class="mt-6 px-4 w-screen min-h-screen max-w-[640px] flex flex-col items-center mx-auto">
        
        <h1 class="text-4xl ">${res.data.judul}</h1>
        <small>${res.data.author} - ${res.data.createdAt}</small>
        <img class="h-[520px] w-full object-cover my-6 rounded-lg" src="${res.data.img}" alt="${res.data.judul}">

        <p>${res.data.content}</p>

    </div>
    
    `
    })
    .catch((err)=>{
        console.error(err)
    })
}
