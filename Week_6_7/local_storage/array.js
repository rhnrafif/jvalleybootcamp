//array

let hobby = ["code", "futsal", "nonton", "rebahan"];

//mengakses array
// console.info(hobby[2])

//menambahkan tipe data dalam array {dibelakang -- push} {didepan - unshift}
hobby.push("game");
hobby.unshift("Tidur");
                                //tipe data object dalam array
let myData = ["rhnrafif", 21, {nim: "043340244", nikah: false}]

let dataMahasiswa = [
    {
        nama: "rhnrafif",
        nim: 043340244,
    },
    {
        nama: "rehan",
        nim: 043340455,
    }
];

// menangkap data dari input user di HTML
let user_form = document.getElementById("user_form");

let dataSiswa = [];

//membuat sebuah function yang akan selalu berjalan ketika page reload
window.onload = function(){
    //check apakah ada local storage dengan nama dataSiswa
    //ini akan berupa string, oleh karena itu di parse dlu ketika akan diolah di js
    let storageData = localStorage.getItem("dataSiswa"); 

    //logika untuk cek keberadaan local storage
    if(!storageData){
        localStorage.setItem("dataSiswa", "[]");
        return
    }

    //merubah tipe data string yang ada di local storage ke dalam array/opbject yang akan bisa
    //diproses oleh function javascript
    //re assigment dataSiswa diambil dari parse local storage
    dataSiswa = JSON.parse(storageData);
};
   

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

    
    //masukan input ke dalam array kosong dengan method push--
    dataSiswa.push(userData);

    // console.info(dataSiswa);  


    // input data ke local storage 
    //langsung dan tipe data sama
    // localStorage.setItem("email", userData.email);

    //input dalam bentuk array
    //merubah array / object ke dalam bentuk string -- JSON stringify
    localStorage.setItem("dataSiswa", JSON.stringify(dataSiswa));
    
    // menampilkan userdata dalam alert setelah disubmit
    alert(` Nama kamu adalah ${userData.username} dengan alamat ${userData.address}`)
});



 


