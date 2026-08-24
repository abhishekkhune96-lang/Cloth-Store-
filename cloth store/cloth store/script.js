let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cartCount").innerText = cart.length;

    alert(name + " added to cart!");
}

function showCart() {

    document.getElementById("cartModal").style.display = "block";

    let cartItems = document.getElementById("cartItems");
    let total = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>₹${item.price}</span>
                <button onclick="removeItem(${index})">❌</button>
            </div>
        `;
    });

    document.getElementById("cartTotal").innerText = total;
}

function removeItem(index) {

    cart.splice(index, 1);

    document.getElementById("cartCount").innerText = cart.length;

    showCart();
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for shopping with UrbanWear!");

    cart = [];

    document.getElementById("cartCount").innerText = 0;

    closeCart();
}

function filterProducts(category) {

    let products = document.querySelectorAll(".product");

    products.forEach(product => {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function scrollToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

/* Search */

document.getElementById("search").addEventListener("input", function() {

    let searchText = this.value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(product => {

        let name = product.querySelector("h3").innerText.toLowerCase();

        if (name.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});