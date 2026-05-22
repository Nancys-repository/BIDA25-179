let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCountElements =
document.querySelectorAll("#cart-count");

const cartTotalElements =
document.querySelectorAll("#cart-total");

function updateCart(){

    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {

        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

    });

    cartCountElements.forEach(element => {

        element.innerText = totalItems;

    });

    cartTotalElements.forEach(element => {

        element.innerText = "P" + totalPrice;

    });

    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(price, name){

    const existingItem =
    cart.find(item => item.name === name);

    if(existingItem){

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    alert(name + " added to cart!");
}

function clearCart(){

    cart = [];

    updateCart();

    alert("Cart cleared!");

}

updateCart();





const darkModeBtn =
document.getElementById("darkModeBtn");

if(darkModeBtn){

    if(localStorage.getItem("darkMode") === "enabled"){

        document.body.classList.add("dark-mode");

    }

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("darkMode", "enabled");

        } else {

            localStorage.setItem("darkMode", "disabled");

        }

    });

}





const menuToggle =
document.getElementById("menuToggle");

const nav =
document.querySelector("nav");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("show-nav");

    });

}





const links =
document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(){

        links.forEach(navLink => {

            navLink.classList.remove("active");

        });

        this.classList.add("active");

    });

});





const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        let name =
        document.getElementById("name").value;

        let email =
        document.getElementById("email").value;

        let message =
        document.getElementById("message").value;

        let whatsappMessage =
        `Hello CRAVE IT DESSERTS!%0A%0A
Name: ${name}%0A
Email: ${email}%0A
Message: ${message}`;

        window.open(
        `https://wa.me/26778119183?text=${whatsappMessage}`,
        "_blank"
        );

    });

}
let cartCount = 0;
let cartTotal = 0;

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        const price = Number(button.dataset.price);

        cartTotal += price;

        document.getElementById("cart-count").textContent = cartCount;

        document.getElementById("cart-total").textContent = cartTotal;

    });

});
