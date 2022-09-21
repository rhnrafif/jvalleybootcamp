
const app = document.getElementById('app');

export default function Home(){

app.innerHTML = `
    <div class="auth">
        <form class="auth_form" autocomplete="off">

            <h1>Login Page</h1>

            <div class="form_group">
                <label for="email">Email</label>
                <input type="text" id="email" required />
            </div>
            <div class="form_group">
                <label for="password">Password</label>
                <input type="password" id="password" required />
            </div>

            <button type="submit">Login</button>
        
        </form>
    
    </div>
`

}