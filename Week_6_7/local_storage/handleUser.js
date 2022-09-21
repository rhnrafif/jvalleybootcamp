
//tangkap element form dengan id user_form
let user_form = document.getElementById("user_form");

//tambahkan event listener
user_form.addEventListener("submit", function(event){

    //stop form dr reload
    event.preventDefault();

    //inisialisasi sebuah object kosong yang sesuai dengan data yang dibutuhkan
    let userData = {
        username : "",
        email : "",
        phone : "",
        married : "",
        address : ""
    }

    //memasukan info dari form dengan akses object dan diisi vaalue form
    userData.username = event.target.username.value;
    userData.email = event.target.email.value;
    userData.phone = event.target.phone.value;
    userData.married = event.target.married.value;
    userData.address = event.target.address.value;

  // console.info(userData);  

});


