window.addEventListener('DOMContentLoaded', () => {
 const reservaBtn = document.getElementById("reservaBtn");

 function handleClick() {
    window.alert("¡Gracias por reservar con nosotros!");
 }

 reservaBtn.addEventListener("click", handleClick);   
});
