import Navbar from "../components/Navbar";
import axios from 'axios';

const app = document.getElementById('app');

//handle submit
window.handleRegister = (event)=>{
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;
    let password2 = event.target.password2.value;

    //validator sederhana
    if(!email || !password || !password2){
        return alert ("Silahkan lengkapi data !");
    }

    if( password != password2){
        return alert("Password harus sama !")
    }

    axios.post('http://localhost:3000/users', {
        email : email,
        password : password
    })
    .then(res =>{
        alert('Registrasi Berhasil');
        window.location.href ='/login';
    })
    .catch(err =>{
        alert('Terjadi kesalahan');
        console.error(err)
    })



}

export default function Register(){
       //ubah document title
    document.title = "Register Page";

    app.innerHTML = `
        ${Navbar()}
        <div class="px-4 w-screen min-h-screen max-w-[1080px] mx-auto flex flex-col items-center">
            <h1 class="text-gray-900 mx-auto mt-8">Silahkan Daftar Gan!!!!!</h1>   

            <form action="" class="w-[320px] flex flex-col gap-4" autocomplete="off" onsubmit="handleRegister(event)">
                <div class="flex flex-col gap-2 font-light">
                    <label for="email">Email</label>
                    <input type="text" id="email" class="h-10 px-3 font-light rounded-md border-gray-800 border-[1.5px]">
                </div>

                <div class="flex flex-col gap-2 font-light">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="h-10 px-3 font-light rounded-md border-gray-800 border-[1.5px]">
                </div>

                <div class="flex flex-col gap-2 font-light">
                    <label for="password2">Ulangi Password</label>
                    <input type="password" id="password2" class="h-10 px-3 font-light rounded-md border-gray-800 border-[1.5px]">
                </div>

                <button class="h-10 w-[30%] bg-sky-400 text-gray-900 rounded-md ml-auto" >Register</button>
            </form>

        </div>
    `
}