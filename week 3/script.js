
// Cart counter logic
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');
const addToCartButton = document.querySelector('.add-to-cart');

addToCartButton.addEventListener('click', () => {
  cartCount++;
  cartCountElement.textContent = cartCount;
  alert('Product added to cart!');
});

// Modal image viewer
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const mainImg = document.getElementById('main-img');
const closeBtn = document.querySelector('.close-btn');

mainImg.addEventListener('click', () => {
  modal.style.display = 'block';
  modalImg.src = mainImg.src;
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
