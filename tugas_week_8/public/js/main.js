//tangkap element
let project1 = document.getElementById("project1");
let project2 = document.getElementById("project2");

//event listener
project1.addEventListener("click", ()=>{
    validator(project1, "./appbelanja/index.html");
    return
})

project2.addEventListener("click", ()=>{
    validator(project2, "#");
    return
})

//mini validator
function validator(project, link){
    let user = prompt('Maaf link ini dibatasi, mohon masukan Identitas anda untuk melihat ini');

    if (user == "admin"){
        project.setAttribute("href", link)
        alert(`Selamat Datang ${user}`)
        return
    }
    alert(`Maaf, ${user} tidak diijinkan mengakses project ini !`)
    return
}