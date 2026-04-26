// SHOW CONTENT AFTER ANIMATION
setTimeout(() => {
 const intro = document.querySelector(".intro");
 const content = document.querySelector(".content");

 if (intro) intro.style.display = "none";
 if (content) content.style.display = "block";
}, 3000);

// OPEN FORM
function openForm() {
 const form = document.getElementById("form");
 if (form) form.style.display = "block";
}

// SEND TO WHATSAPP
function sendWhatsApp() {
 let name = document.getElementById("name").value;
 let phone = document.getElementById("phone").value;
 let order = document.getElementById("order").value;

 let message = `Name: ${name}%0APhone: ${phone}%0AOrder: ${order}`;
 let url = "https://wa.me/26778119183?text=" + message;

 window.open(url, "_blank");
}
