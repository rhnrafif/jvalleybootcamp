// console.info('Hello World');

//membuat sebuah array yang menampung banyak object
let noteData = [
    {
        id: 1,
        note: " Ini adalah note pertama"
    },
    {
        id:2,
        note: "Ini adalah note kedua"
    },
    {
        id:3,
        note: "Ini adalah note ketiga"
    },
    {
        id:4,
        note: "Ini adalah note ke empat"
    }
];

//tangkap elemnt html
let root = document.getElementById("root");

//buat element dengan string
let Card = function(content){
    return `
    <div class="card"> ${content} </div>
    `
};

let Card2 = function(id, content){
    return `
    <div class="card"> ${id} ${content} </div>
    `
}

//render object pada array ke delam element html
noteData.forEach((elem)=>{
    // console.info(elem);

    root.innerHTML += Card2(elem.id, elem.note);
})
