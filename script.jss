document.addEventListener("DOMContentLoaded", () => {

    // CART VARIABLES
    let cartCount = 0;
    let cartTotal = 0;

    // SELECT ALL ADD TO CART BUTTONS
    const cartButtons = document.querySelectorAll(".add-cart");

    // LOOP THROUGH BUTTONS
    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            // GET PRICE
            const price = Number(button.dataset.price);

            // UPDATE CART
            cartCount++;
            cartTotal += price;

            // DISPLAY UPDATED VALUES
            document.getElementById("cart-count").textContent = cartCount;
            document.getElementById("cart-total").textContent = cartTotal;

            // OPTIONAL BUTTON FEEDBACK
            button.textContent = "Added ✓";

            setTimeout(() => {
                button.textContent = "Add to Cart";
            }, 1000);

        });

    });

    // DARK MODE
    const darkModeBtn = document.getElementById("darkModeBtn");

    if (darkModeBtn) {

        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
        }

        darkModeBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }

        });

    }

    // MOBILE MENU
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector("nav");

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("show-nav");
        });

    }

    // ACTIVE NAV LINKS
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("click", function () {

            links.forEach(navLink => {
                navLink.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

});

function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
}

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

