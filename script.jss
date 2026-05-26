document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // CART VARIABLES
    // =========================
    let cart = [];

    // CART DISPLAY ELEMENTS
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    // CREATE CART ITEMS CONTAINER
    let cartItemsContainer = document.getElementById("cart-items");

    // IF NOT FOUND, CREATE IT
    if (!cartItemsContainer) {

        cartItemsContainer = document.createElement("div");

        cartItemsContainer.id = "cart-items";

        document.querySelector(".cart-box")
            .appendChild(cartItemsContainer);
    }

    // =========================
    // ADD TO CART BUTTONS
    // =========================
    const cartButtons = document.querySelectorAll(".add-cart");

    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            // GET CARD
            const card = button.parentElement;

            // GET ITEM NAME
            const itemName =
                card.querySelector("h3").textContent;

            // GET ITEM PRICE
            const itemPrice =
                Number(button.dataset.price);

            // CREATE ITEM OBJECT
            const item = {
                name: itemName,
                price: itemPrice
            };

            // ADD ITEM TO CART ARRAY
            cart.push(item);

            // UPDATE DISPLAY
            updateCart();

            // BUTTON FEEDBACK
            button.textContent = "Added ✓";

            setTimeout(() => {
                button.textContent = "Add to Cart";
            }, 1000);

        });

    });

    // =========================
    // UPDATE CART FUNCTION
    // =========================
    function updateCart() {

        // UPDATE COUNT
        cartCount.textContent = cart.length;

        // CALCULATE TOTAL
        let total = 0;

        cart.forEach(item => {
            total += item.price;
        });

        // UPDATE TOTAL DISPLAY
        cartTotal.textContent = total;

        // CLEAR OLD ITEMS
        cartItemsContainer.innerHTML = "";

        // DISPLAY ITEMS
        cart.forEach((item, index) => {

            // CREATE ITEM DIV
            const itemDiv = document.createElement("div");

            itemDiv.classList.add("cart-item");

            // ITEM CONTENT
            itemDiv.innerHTML = `
                <span>
                    ${item.name} - P${item.price}
                </span>

                <button class="remove-btn">
                    Remove
                </button>
            `;

            // REMOVE BUTTON
            const removeBtn =
                itemDiv.querySelector(".remove-btn");

            removeBtn.addEventListener("click", () => {

                // REMOVE ITEM
                cart.splice(index, 1);

                // REFRESH CART
                updateCart();

            });

            // ADD ITEM TO CONTAINER
            cartItemsContainer.appendChild(itemDiv);

        });

    }

    // =========================
    // DARK MODE
    // =========================
    const darkModeBtn =
        document.getElementById("darkModeBtn");

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
