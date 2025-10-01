let cart = [];

function showMessage(message) {
    const messageBox = document.getElementById('message-box');
    messageBox.textContent = message;
    messageBox.style.transform = 'translateY(0) scale(1)';
    messageBox.style.opacity = '1';
    setTimeout(() => {
        messageBox.style.transform = 'translateY(-20px) scale(0.9)';
        messageBox.style.opacity = '0';
    }, 3000);
}

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + ' VNĐ';
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center text-gray-500">Giỏ hàng trống.</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            const itemElement = document.createElement('div');
            itemElement.className = 'flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm';
            itemElement.innerHTML = `
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover">
                            <div class="flex-1">
                                <h4 class="font-semibold text-sm">${item.name}</h4>
                                <p class="text-sm text-gray-600">${formatPrice(item.price)}</p>
                            </div>
                            <div class="flex items-center border rounded-lg overflow-hidden">
                                <button onclick="changeCartItemQuantity('${item.name}', -1)" class="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-l-lg">-</button>
                                <span class="w-8 text-center">${item.quantity}</span>
                                <button onclick="changeCartItemQuantity('${item.name}', 1)" class="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-r-lg">+</button>
                            </div>
                            <button onclick="removeCartItem('${item.name}')" class="text-red-500 hover:text-red-700 transition duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M3 6h18" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1="10" y1="11" x2="10" y2="17" />
                                    <line x1="14" y1="11" x2="14" y2="17" />
                                </svg>
                            </button>
                        `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    document.getElementById('totalPrice').textContent = formatPrice(totalPrice);
    document.getElementById('cart-count').textContent = cart.reduce((total, item) => total + item.quantity, 0);
}


function addToCart(product, quantity) {
    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    updateCartUI();
    showMessage('Đã thêm sản phẩm vào giỏ hàng!');
}

function changeCartItemQuantity(name, change) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeCartItem(name);
        } else {
            updateCartUI();
        }
    }
}

function removeCartItem(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartUI();
    showMessage('Đã xoá sản phẩm khỏi giỏ hàng.');
}

function changeQuantity(change) {
    const quantityInput = document.getElementById('productQuantity');
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity += change;
    if (currentQuantity < 1) {
        currentQuantity = 1;
    }
    quantityInput.value = currentQuantity;
}

function openCartModal() {
    document.getElementById('cartModal').style.display = 'flex';
    updateCartUI();
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const cartModal = document.getElementById('cartModal');
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            closeCartModal();
        }
    });
});