// Variables Globales
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");
const shopContent = document.getElementById('shop-content');
const cartContent = document.querySelector('.cart-content');
const totalElement = document.querySelector('.total-price');
const cartCountElement = document.querySelector('#cart-count');
const btnBuy = document.querySelector('#btn-buy');

// Botones de filtro
const filterBtns = document.querySelectorAll('.filter-btn');

let cartItems = [];

// 1. INICIALIZAR
document.addEventListener('DOMContentLoaded', () => {
    // Por defecto mostramos todo ('all')
    renderProducts('all');
});

// 2. SISTEMA DE FILTRADO
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // a) Remover clase 'active-filter' de todos los botones
        filterBtns.forEach(b => b.classList.remove('active-filter'));
        // b) Agregar clase 'active-filter' al botón clicado
        btn.classList.add('active-filter');
        
        // c) Obtener el valor del filtro (ej: 'bolsos', 'all')
        const filterValue = btn.getAttribute('data-filter');
        
        // d) Renderizar de nuevo con el filtro aplicado
        renderProducts(filterValue);
    });
});

// 3. RENDERIZAR PRODUCTOS
function renderProducts(category) {
    // Limpiamos el contenedor
    shopContent.innerHTML = '';

    // Filtramos el array de productos
    const productsToShow = (category === 'all') 
        ? productos // Si es 'all', mostramos todo
        : productos.filter(product => product.tipo === category); // Si no, filtramos por tipo

    // Generamos el HTML
    productsToShow.forEach(product => {
        const productBox = document.createElement('div');
        productBox.classList.add('product-box');
        
        // CORRECCIÓN AQUÍ: Quitamos 'img/' del src
        productBox.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}" class="product-img">
            <h2 class="product-title">${product.nombre}</h2>
            <div class="price">S/ ${product.precio.toFixed(2)}</div>
            <i class='bx bx-shopping-bag add-cart' onclick="addToCart(${product.id})"></i>
        `;
        shopContent.appendChild(productBox);
    });
}

// 4. LÓGICA DEL CARRITO
cartIcon.onclick = () => cart.classList.add("active");
closeCart.onclick = () => cart.classList.remove("active");

window.addToCart = (id) => {
    const product = productos.find(p => p.id === id);
    const exists = cartItems.find(item => item.id === id);
    if (exists) {
        alert("¡Ya está en el carrito!");
        return;
    }
    cartItems.push(product);
    renderCart();
    cart.classList.add("active");
}

function renderCart() {
    cartContent.innerHTML = '';
    let total = 0;
    cartItems.forEach((item, index) => {
        const cartBox = document.createElement('div');
        cartBox.classList.add('cart-box');
        
        // CORRECCIÓN AQUÍ TAMBIÉN: Quitamos 'img/' del src
        cartBox.innerHTML = `
            <img src="${item.imagen}" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${item.nombre}</div>
                <div class="cart-price">S/ ${item.precio.toFixed(2)}</div>
            </div>
            <i class='bx bxs-trash-alt cart-remove' onclick="removeFromCart(${index})"></i>
        `;
        cartContent.appendChild(cartBox);
        total += item.precio;
    });
    totalElement.innerText = "S/ " + total.toFixed(2);
    cartCountElement.innerText = cartItems.length;
}

window.removeFromCart = (index) => {
    cartItems.splice(index, 1);
    renderCart();
}

btnBuy.addEventListener('click', () => {
    if (cartItems.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    const phoneNumber = "51989424344";
    let message = "Hola Katia Store, deseo comprar:%0A%0A";
    cartItems.forEach(item => {
        message += `• ${item.nombre} - S/ ${item.precio.toFixed(2)}%0A`;
    });
    const total = totalElement.innerText;
    message += `%0A*Total: ${total}*`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
});