import axios from "axios";
import Navbar from "../components/Navbar";

const app = document.getElementById('app');

// function handle Blog input 
window.handleBlog = (event)=>{

    event.preventDefault();

    let userData = JSON.parse(localStorage.getItem('userData'));
    let judul = event.target.judul.value;
    let img = event.target.img.value;
    let content = event.target.content.value;

    axios.post('http://localhost:3000/blogs', {
        userId : userData.user.id,
        author : userData.user.email,
        judul : judul,
        img : img,
        content : content,
        createdAt : new Date().toLocaleDateString()
    })
    .then((res)=>{
        alert('Berhasill gan !')
        window.location.href = '/'
    })
    .catch((err)=>{
        alert('Tidak berhasil')
        console.error(err)
    })
}

export default function AddBlog(){

    app.innerHTML = `
    
    ${Navbar()}
    <div class="px-4 w-screen min-h-screen max-w-[1080px] mx-auto">
        <form class="w-[500px] flex flex-col gap-4 mx-auto mt-8" onsubmit="handleBlog(event)" autocomplete="off" >
            <div class="flex flex-col gap-2 font-light">
                <label for="judul">Judul</label>
                <input type="text" id="judul" class="w-full px-3 h-10 font-light bg-gray-200 rounded-md border-gray-800 border-[1.5px] "/>
            </div>

            <div class="flex flex-col gap-2 font-light">
                <label for="img">Link Gambar</label>
                <input type="text" id="img" class="w-full px-3 h-10 font-light bg-gray-200 rounded-md border-gray-800 border-[1.5px] "/>
            </div>

            <div class="flex flex-col gap-2 font-light">
                <label for="content">Content</label>
                <textarea id="content" class="w-full p-3 h-[300px] font-light bg-gray-200 rounded-md border-gray-800 border-[1.5px]"></textarea>
            </div>

            <button type="submit" class="h-10 w-[30%] bg-sky-400 text-gray-900 rounded-md mx-auto" >Submit</button>
        
        
        
        </form>
    </div>
    
    
    `    
}