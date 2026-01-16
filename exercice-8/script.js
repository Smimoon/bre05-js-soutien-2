window.addEventListener("DOMContentLoaded", () => {
    let li = document.querySelectorAll("li");
    
    for(let i=0; i<li.length; i++) {
        if(i% 2 !== 0) {
            li[i].style.color="blue";
        }
    }
})