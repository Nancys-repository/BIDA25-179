document.addEventListener("DOMContentLoaded", () => {

    let cartCount = 0;
    let cartTotal = 0;

    const cartButtons = document.querySelectorAll(".add-cart");

    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            cartCount++;

            let price = Number(button.dataset.price);

            cartTotal += price;

            document.getElementById("cart-count").textContent = cartCount;

            document.getElementById("cart-total").textContent = cartTotal;

        });

    });




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

});
