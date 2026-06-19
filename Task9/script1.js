let products = [];
let cart = [];

const productContainer = document.getElementById("products");
const loading = document.getElementById("loading");

fetch("https://fakestoreapi.com/products")

.then(response => response.json())

.then(data => {

    products = data;

    displayProducts(products);

    loading.innerText =
        "Products Loaded Successfully";

    showStatistics();
})

.catch(error => {

    console.log(error);

    loading.innerText =
        "Failed To Load Products";
})

.finally(() => {

    console.log("API Completed");

});



function displayProducts(productArray){

    productContainer.innerHTML = "";

    productArray.forEach(product => {

        let card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p>₹ ${product.price}</p>
            <p>${product.category}</p>
            <p>⭐ ${product.rating.rate}</p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        `;

        productContainer.append(card);
    });

}



document
.getElementById("searchInput")
.addEventListener("input", function(){

    let searchText =
        this.value.toLowerCase();

    let filteredProducts =
        products.filter(product =>

            product.title
            .toLowerCase()
            .includes(searchText)

        );

    displayProducts(filteredProducts);

});



document
.getElementById("categoryFilter")
.addEventListener("change", function(){

    let category = this.value;

    if(category === "all"){
        displayProducts(products);
        return;
    }

    let filteredProducts =
        products.filter(product =>
            product.category === category
        );

    displayProducts(filteredProducts);

});




function addToCart(id){

    let product =
        products.find(
            product => product.id === id
        );

    cart.push(product);

    document.getElementById(
        "cartCount"
    ).innerText = cart.length;

}

function addToCart(id){

    let product = products.find(p => p.id === id);

    cart.push(product);

    const cartCountEl = document.getElementById("cartCount");
    const cartCountModalEl = document.getElementById("cartCountModal");
    if(cartCountEl) cartCountEl.innerText = cart.length;
    if(cartCountModalEl) cartCountModalEl.innerText = cart.length;

    renderCart();

}



function removeFromCart(id){

    cart = cart.filter(item => item.id !== id);

    const cartCountEl = document.getElementById("cartCount");
    const cartCountModalEl = document.getElementById("cartCountModal");
    if(cartCountEl) cartCountEl.innerText = cart.length;
    if(cartCountModalEl) cartCountModalEl.innerText = cart.length;

    renderCart();

}


function renderCart(){

    const cartItems = document.getElementById("cartItems");
    if(!cartItems) return;

    cartItems.innerHTML = "";

    if(cart.length === 0){
        cartItems.innerHTML = `<p>Your cart is empty.</p>`;
        return;
    }

    cart.forEach(item => {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.alignItems = "center";
        row.style.justifyContent = "space-between";
        row.style.padding = "8px 0";
        row.style.borderBottom = "1px solid #eee";

        const left = document.createElement("div");
        left.style.display = "flex";
        left.style.alignItems = "center";

        const img = document.createElement("img");
        img.src = item.image;
        img.style.width = "40px";
        img.style.height = "40px";
        img.style.objectFit = "contain";
        img.style.marginRight = "8px";

        const title = document.createElement("div");
        title.innerText = item.title;
        title.style.fontSize = "13px";
        title.style.maxWidth = "180px";
        title.style.overflow = "hidden";
        title.style.textOverflow = "ellipsis";
        title.style.whiteSpace = "nowrap";

        left.appendChild(img);
        left.appendChild(title);

        const right = document.createElement("div");

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.style.padding = "6px 8px";
        removeBtn.onclick = function(){ removeFromCart(item.id); };

        right.appendChild(removeBtn);

        row.appendChild(left);
        row.appendChild(right);

        cartItems.appendChild(row);

    });

}

function showCart(){
    const modal = document.getElementById("cartModal");
    if(modal){
        modal.style.display = "block";
        renderCart();
    }
}

function hideCart(){
    const modal = document.getElementById("cartModal");
    if(modal) modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(){
    const cartBtn = document.getElementById("cartBtn");
    if(cartBtn) cartBtn.addEventListener("click", showCart);

    const closeCart = document.getElementById("closeCart");
    if(closeCart) closeCart.addEventListener("click", hideCart);
});




function showStatistics(){

    let totalProducts =
        products.length;

    let totalPrice =
        products.reduce(
            (sum,p) => sum + p.price,
            0
        );

    let averagePrice =
        (totalPrice / totalProducts)
        .toFixed(2);

    let highest =
        [...products]
        .sort((a,b)=>b.price-a.price)[0];

    let lowest =
        [...products]
        .sort((a,b)=>a.price-b.price)[0];

    document
    .getElementById("statistics")
    .innerHTML = `
        <h3>Total Products:
        ${totalProducts}</h3>

        <h3>Average Price:
        ₹${averagePrice}</h3>

        <h3>Highest Price Product:
        ${highest.title}</h3>

        <h3>Lowest Price Product:
        ${lowest.title}</h3>
    `;
}