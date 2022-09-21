
// function show modal
export function showModal(){ 
    modal.style.display = "flex";
    floating_button.style.backgroundColor = "gray";
    floating_button.style.transform = "rotate(45deg)";
}

// function hide modal
export function hideModal(){
    modal.style.display = "none";
    floating_button.style.backgroundColor = "teal";
    floating_button.style.transform = "rotate(0deg)";
}
