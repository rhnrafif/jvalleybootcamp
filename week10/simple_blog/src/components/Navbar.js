
//menambah func handle logout
window.handleLogout = ()=>{
    //clear data local storage
    localStorage.clear();

    //kembalikan ke halaman login
    window.location.href = '/'
}


export default function Navbar(){

    //menghilangkan register/login ketika sudah login

    //ambil data dr local storage
    let userData = localStorage.getItem('userData');

    return `
    <nav class="w-full h-20 flex bg-gradient-to-br from-sky-600 to-sky-400">
        <div class="w-full max-w-[1080px] flex items-center justify-start px-4 mx-auto">
            <img src="./logo.svg" alt="logo boongan" class=" h-12 mr-8">

            <h1 class="text-gray-900 text-4xl font-light select-none cursor-pointer">J Valley Blog</h1>
            
            ${userData ? `<menu class="flex gap-4 text-gray-900 font-normal ml-auto items-center" >
                    <a href="/">Home</a>
                    <a href="/addBlog">Add Blog</a>
                    <a class="cursor-pointer" onclick="handleLogout()">Logout</a>
                    <span class=" bg-gray-700 text-white rounded-xl px-4 py-1" >
                    <!-- Ini Coments -->
                        ${JSON.parse(userData).user.email }
                    </span>
            </menu>` : `
            <menu class="flex gap-4 text-gray-900 font-normal ml-auto" >
                    <a href="/">Home</a>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
            </menu>
            `}
        </div>
    </nav>
    `
    
}