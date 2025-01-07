import init, { apply_discount } from './rust-wasm/pkg/store_logic.js';

document.addEventListener('DOMContentLoaded', async () => {
    await init();

    const productGrid = document.querySelector('.product-grid');
    const products = [
        { name: 'Stylish T-shirt', price: 20 },
        { name: 'Comfort Jeans', price: 40 },
        { name: 'Classic Jacket', price: 60 }
    ];

    products.forEach(product => {
        const discountedPrice = apply_discount(product.price, 10); // Apply a 10% discount

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${discountedPrice.toFixed(2)}</p>
        `;

        productGrid.appendChild(productCard);
    });

    document.getElementById('contact-form').addEventListener('submit', event => {
        event.preventDefault();
        alert('Form submitted successfully!');
    });
});
