
// apa itu object

let userDetails = {
    username: "rhnrafif",
    email: "raihanudinrafif@gmail.com",
    phone: "08989011101",
    age: 21,
    married : false
};

// merubah value pada property

//akses properti pada object lalu merubahnya
userDetails.username = "rehan";

//menambahkan properti baru
userDetails.addres = "Tangerang";

//mengakses properti pada object
// username = userDetails.username;
// username = userDetails.["username"];

// object destuct
let {username} = userDetails;
let {addres, email} = userDetails;

console.info(username);
console.info(email);

