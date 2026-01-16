window.addEventListener("DOMContentLoaded", () => {
   let div = document.getElementById("zone-interactive");
   
   div.addEventListener("mousedown", (event) => {
      div.style.backgroundColor = "orange";
   });
   
   div.addEventListener("mouseup", (event) => {
      div.style.backgroundColor = "lightgrey"; 
   });
});