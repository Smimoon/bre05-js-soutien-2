window.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("mon-bouton");
    let text = document.getElementById("texte-a-cacher");
    
    button.addEventListener("click", (event) => {
        text.style.display = "none";
    });
})