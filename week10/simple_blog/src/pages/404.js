const app = document.getElementById('app');

export default function NotFound(){
    app.innerHTML = `
        <div class="w-screen min-h-screen max-w-[1080px] mx-auto flex flex-col justify-center items-center">
            <h1 class="text-sky-700 text-4xl">Page Not Found</h1>
        
        </div>
    
    `
}