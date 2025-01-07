Cart handling (this is just a simple local cart implementation)
let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent;

        cart.push({ name: productName, price: productPrice });
        alert(`${productName} added to cart!`);
    });
});
      
