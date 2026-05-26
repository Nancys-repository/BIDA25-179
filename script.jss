document.addEventListener("DOMContentLoaded", () => {

    // CART DATA
    let cart = [];

    // ELEMENTS
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    const cartItems = document.getElementById("cart-items");

    // ADD TO CART BUTTONS
    const cartButtons = document.querySelectorAll(".add-cart");

    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            // GET ITEM INFO
            const card = button.parentElement;

            const itemName = card.querySelector("h3").textContent;

            const itemPrice = Number(button.dataset.price);

            // CREATE ITEM OBJECT
            const item = {
                name: itemName,
                price: itemPrice
            };

            // ADD ITEM TO ARRAY
            cart.push(item);

            // UPDATE CART DISPLAY
            updateCart();

        });

    });

    // UPDATE CART FUNCTION
    function updateCart() {

        // UPDATE COUNT
        cartCount.textContent = cart.length;

        // UPDATE TOTAL
        let total = 0;

        cart.forEach(item => {
            total += item.price;
        });

        cartTotal.textContent = total;

        // CLEAR CART DISPLAY
        cartItems.innerHTML = "";

        // SHOW ITEMS
        cart.forEach((item, index) => {

            const div = document.createElement("div");

            div.classList.add("cart-item");

            div.innerHTML = `
                ${item.name} - P${item.price}
                <button class="remove-btn">Remove</button>
            `;

            // REMOVE BUTTON
            div.querySelector(".remove-btn")
                .addEventListener("click", () => {

                    // REMOVE ITEM
                    cart.splice(index, 1);

                    // REFRESH CART
                    updateCart();

                });

            cartItems.appendChild(div);

        });

    }

});
