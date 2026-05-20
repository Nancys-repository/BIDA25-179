// Mobile Navigation Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
 
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
 
// Scroll Animation
const cards = document.querySelectorAll(
    ".feature-card, .menu-card, .gallery-grid img, .about-image, .contact-box"
);
 
window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.85;
 
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
 
        if(cardTop < triggerBottom){
            card.classList.add("show");
        }
    });
});
 
// Contact Form Alert
const form = document.querySelector("form");
 
if(form){
    form.addEventListener("submit", (e) => {
        e.preventDefault();
 
        alert("Thank you for contacting Crave It Desserts! 🍰");
 
        form.reset();
    });
}
 
// Smooth Fade Hero Text
window.addEventListener("load", () => {
    document.querySelector(".hero-content").classList.add("fade-in");
});
 
// Button Hover Glow
const buttons = document.querySelectorAll(".btn, button");
 
buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });
 
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});
 
// Dynamic Navbar Shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
 
    if(window.scrollY > 50){
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    }
});
 
// Auto Close Mobile Menu
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
// Mobile Navigation Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
 
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
 
// Scroll Animation
const cards = document.querySelectorAll(
    ".feature-card, .menu-card, .gallery-grid img, .about-image, .contact-box"
);
 
window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.85;
 
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
 
        if(cardTop < triggerBottom){
            card.classList.add("show");
        }
    });
});
 
// Contact Form Alert
const form = document.querySelector("form");
 
if(form){
    form.addEventListener("submit", (e) => {
        e.preventDefault();
 
        alert("Thank you for contacting Crave It Desserts! 🍰");
 
        form.reset();
    });
}
 
// Smooth Fade Hero Text
window.addEventListener("load", () => {
    document.querySelector(".hero-content").classList.add("fade-in");
});
 
// Button Hover Glow
const buttons = document.querySelectorAll(".btn, button");
 
buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });
 
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});
 
// Dynamic Navbar Shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
 
    if(window.scrollY > 50){
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    }
});
 
// Auto Close Mobile Menu
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
 
// Mobile Navigation Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
 
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
 
// WhatsApp Form
const whatsappForm = document.getElementById("whatsapp-form");
 
if(whatsappForm){
 
    whatsappForm.addEventListener("submit", function(e){
 
        e.preventDefault();
 
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
 
        let phoneNumber = "267XXXXXXXX";
 
        let whatsappMessage =
`Hello Crave It Desserts!
 
Name: ${name}
Email: ${email}
 
Message:
${message}`;
 
        let url =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
 
        window.open(url, "_blank");
 
    });
 
}
 
// Scroll Animation
const cards = document.querySelectorAll(
".feature-card, .menu-card, .gallery-grid img"
);
 
window.addEventListener("scroll", () => {
 
    const triggerBottom = window.innerHeight * 0.85;
 
    cards.forEach(card => {
 
        const cardTop = card.getBoundingClientRect().top;
 
        if(cardTop < triggerBottom){
 
            card.classList.add("show");
 
        }
 
    });
 
});

