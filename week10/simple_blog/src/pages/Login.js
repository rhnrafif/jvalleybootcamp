import Navbar from "../components/Navbar";
import axios from 'axios';

const app = document.getElementById('app');

//handle Login function
window.handleLogin = (event)=>{
    event.preventDefault();
    
    let email = event.target.email.value;
    let password = event.target.password.value;

    //post input login, ketika login, user harus sudah ada di db JSON.
    axios.post('http://localhost:3000/login', {
        email:email,
        password:password
    })
    .then((res) =>{
        alert("Login Berhasil");
        localStorage.setItem('userData', JSON.stringify(res.data));
        window.location.href = '/';
    })
    .catch((err) =>{
        alert("Terjadi Kesalahan")
        console.error(err);
    })
}

export default function Login(){
   //ubah document title
    document.title = "Login Page";

    app.innerHTML = `
        ${Navbar()}
        <div class=" px-4 w-screen min-h-screen max-w-[1080px] flex flex-col items-center mx-auto">
            <h1 class="text-gray-900 mt-8">Yuk Masuk guyss!!</h1>

            <form class="w-[320px] flex flex-col gap-4" autocomplete="off" onsubmit="handleLogin(event)">
                <div class="flex flex-col gap-2 font-light">
                    <label for="email">Email</label>
                    <input type="text" id="email" class="h-10 px-3 font-light rounded-md border-gray-800 border-[1.5px]">
                </div>

                <div class="flex flex-col gap-2 font-light">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="h-10 px-3 font-light rounded-md border-gray-800 border-[1.5px]">
                </div>

                <button type="" class="h-10 w-[30%] bg-sky-400 text-gray-900 rounded-md ml-auto" >Login</button>
            </form>
        
        </div>
    
    `
}