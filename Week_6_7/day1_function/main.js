
//function
//kumpulan dari beberapa perintah
//reusable

//declare and assign variable
function cetak_nama(){
    console.info("Raihanudin Rafif");

}

//mengakses element button Cetak Nama
let btn_cetak_nama = document.getElementById("btn_cetak_nama");

//menambahkan function cetak nama ke dalam button cetak nama
btn_cetak_nama.addEventListener("click", function(){ //recursive function
    cetak_nama();
});

//paramater
function cetak_data_siswa (username, email, nis){
let cetak = `Halo ${username}, kamu berhasil menghubungkan email ${email} 
dan NIS ${nis}`;

console.info(cetak);
}

//render ke Elment HTML
function render_html(nama_siswa, email_siswa, nis_siswa){
    //tangkap element dengan id list_siswa
    let list_siswa = document.getElementById("list_siswa");
    
    //inner HTML
    list_siswa.innerHTML += `
    <pre>
    ========================================
    Nama Siswa : ${nama_siswa}
    ----------------------------------------
    Email      : ${email_siswa}
    ----------------------------------------
    NIS        : ${nis_siswa}   
    ========================================
    </pre>
    `
}

//menangkap value dari elemen button
let btn_tambah_data_siswa = document.getElementById("btn_tambah_data_siswa");

//memasukan function dalam function 
// function ambil input dari form
function input_data_siswa(){

    //memasukan data input user ke dalam variable
    let nama_siswa = prompt("Masukan Nama Anda : ");
    let email_siswa = prompt("Masukan email anda : ");
    let nis_siswa = prompt("Masukan NIS Anda : ");

    //jalankan function sebelumnya dengan data yang diinput oleh user
    cetak_data_siswa(nama_siswa, email_siswa, nis_siswa);

    //jalankan function renderHTML
    render_html(nama_siswa, email_siswa, nis_siswa);

}

//menambahkan event listener kedalam button
btn_tambah_data_siswa.addEventListener("click", function(){
    input_data_siswa();
});