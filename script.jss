document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // CART
    // =========================

    let cart = [];

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");

    const cartItems =
        document.getElementById("cart-items");

    const buttons =
        document.querySelectorAll(".add-cart");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const card =
                button.parentElement;

            const name =
                card.querySelector("h3").textContent;

            const price =
                Number(button.dataset.price);

            cart.push({
                name: name,
                price: price
            });

            updateCart();

        });

    });

    function updateCart() {

        // UPDATE COUNT
        cartCount.textContent = cart.length;

        // UPDATE TOTAL
        let total = 0;

        cart.forEach(item => {
            total += item.price;
        });

        cartTotal.textContent = total;

        // CLEAR ITEMS
        cartItems.innerHTML = "";

        // DISPLAY ITEMS
        cart.forEach((item, index) => {

            const div =
                document.createElement("div");

            div.classList.add("cart-item");

            div.innerHTML = `
                <span>
                    ${item.name} - P${item.price}
                </span>

                <button class="remove-btn">
                    Remove
                </button>
            `;

            // REMOVE BUTTON
            div.querySelector(".remove-btn")
                .addEventListener("click", () => {

                    cart.splice(index, 1);

                    updateCart();

                });

            cartItems.appendChild(div);

        });

    }

    // =========================
    // DARK MODE
    // =========================

    const darkModeBtn =
        document.getElementById("darkModeBtn");

    if (darkModeBtn) {

        // LOAD SAVED MODE
        if (
            localStorage.getItem("darkMode")
            === "enabled"
        ) {

            document.body.classList.add("dark-mode");

        }

        // BUTTON CLICK
        darkModeBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            // SAVE MODE
            if (
                document.body.classList.contains("dark-mode")
            ) {

                localStorage.setItem(
                    "darkMode",
                    "enabled"
                );

            } else {

                localStorage.setItem(
                    "darkMode",
                    "disabled"
                );

            }

        });

    }

    // =========================
    // MOBILE MENU
    // =========================

    const menuToggle =
        document.getElementById("menuToggle");

    const nav =
        document.querySelector("nav");

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("show-nav");

        });

    }

    // =========================
    // ACTIVE NAV LINKS
    // =========================

    const links =
        document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("click", function () {

            links.forEach(navLink => {

                navLink.classList.remove("active");

            });

            this.classList.add("active");

        });

    });

});
