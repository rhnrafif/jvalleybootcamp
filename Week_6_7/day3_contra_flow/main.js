//mendapatkan element input HTML dengan id login_page
let login_form = document.getElementById("login_form");

//menambahkan event listener submit
login_form.addEventListener('submit', function(event){
    
//mencegah nilai default dari variable event
event.preventDefault();

// membuat variable penampung value dari email dan password
let input_email = event.target.email.value;
let input_password = event.target.password.value;
                //event adalah parameter daru func nya
                //target adalah atribut dari form HTMLnya
                //password & email adalah id dari element input HTML
                //value adalah nilai/isi dari element input HTML

// default email dan password dari database ceritanya :)
//untuk melakukan komparasi atau validasi 
let my_email = "raihanudinrafif@gmail.com";
let my_password = "124586";

//membandingkan value atau validasi email dan password tersebut
if(input_email != my_email){
    alert("Email belum terdaftar");
    return //akan menghentikan code funtion dibawahnya
}

if(input_password != my_password){
    alert("Password belum terdaftar");
    return //akan menghentikan code funtion dibawahnya
}

//jika proses validasi berhasil
alert("Login Berhasil")

})

