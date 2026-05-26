document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // CART VARIABLES
    // =========================
    let cart = [];

    // CART ELEMENTS
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    const cartItems = document.getElementById("cart-items");

    // =========================
    // ADD TO CART BUTTONS
    // =========================
    const cartButtons = document.querySelectorAll(".add-cart");

    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            // GET CARD
            const card = button.parentElement;

            // GET NAME
            const itemName =
                card.querySelector("h3").textContent;

            // GET PRICE
            const itemPrice =
                Number(button.dataset.price);

            // ADD ITEM TO CART
            cart.push({
                name: itemName,
                price: itemPrice
            });

            // UPDATE CART
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

        // DISPLAY TOTAL
        cartTotal.textContent = total;

        // CLEAR OLD ITEMS
        cartItems.innerHTML = "";

        // DISPLAY ITEMS
        cart.forEach((item, index) => {

            // CREATE ITEM DIV
            const itemDiv =
                document.createElement("div");

            itemDiv.classList.add("cart-item");

            // ADD CONTENT
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

            // ADD TO CART DISPLAY
            cartItems.appendChild(itemDiv);

        });

    }

});
