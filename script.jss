let cartCount = 0;
let total = 0;

function addToCart(price){

  cartCount++;
  total += price;

  document.getElementById("cart-count").innerText = cartCount;

  alert(
    "Item added to cart\n" +
    "Items: " + cartCount +
    "\nTotal: P" + total
  );
}

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
