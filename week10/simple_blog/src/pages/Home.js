import axios from "axios";
import Navbar from "../components/Navbar";

const app = document.getElementById('app');

export default function Home(){

    //ubah document title
    document.title = "Home Page";

    axios.get('http://localhost:3000/blogs')
    .then((res)=>{
        app.innerHTML += Navbar();
        res.data.forEach((e)=>{
            app.innerHTML += `
                <div class="flex flex-col gap-4 max-w-[600px] bg-gray-700 shadow-md p-6 my-4 mx-auto rounded-md" >
                    <h1>${e.judul}</h1>
                    <small>${e.author}</small>
                    <img src="${e.img}" alt="${e.judul}">
                    <p>${e.content}</p>
                </div>
            `
        })
    })

    // app.innerHTML = `
    //     <div class="px-4 w-screen min-h-screen max-w-[1080px] mx-auto">
    //         <div class="flex justify-center items-center">
    //             <h1 class="text-sky-700 text-4xl mx-auto">Welcome to J Valleyy Gannnn</h1>

    //         </div>
    //     </div>
    
    // `
}