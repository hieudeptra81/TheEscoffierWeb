
// Cart state management
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// DOM Elements
const cartItemsContainer = document.getElementById('cart-items-container');
const emptyCartDiv = document.getElementById('empty-cart');
const cartCountSpan = document.getElementById('cart-count');
const subtotalSpan = document.getElementById('subtotal');
const totalSpan = document.getElementById('total');
const orderSummary = document.getElementById('order-summary');
const checkoutForm = document.getElementById('checkout-form');
const orderForm = document.getElementById('order-form');

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add some sample items if cart is empty (for demo purposes)
    if (cartItems.length === 0) {
        addSampleItems();
    }
    
    renderCart();
    updateCartSummary();
});


// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // Update global cart manager if available
    if (window.cartManager) {
        window.cartManager.cartItems = cartItems;
        window.cartManager.updateCartCount();
    }
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' VNĐ';
}

// Show notification
function showNotification(message, type = 'success') {
    const notificationArea = document.getElementById('notification-area');
    const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
    
    const notification = document.createElement('div');
    notification.className = `alert ${alertClass} alert-dismissible fade show notification fade-in`;
    notification.innerHTML = `
        <strong>${message}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    notificationArea.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Render cart items
function renderCart() {
    if (cartItems.length === 0) {
        cartItemsContainer.style.display = 'none';
        emptyCartDiv.classList.remove('d-none');
        orderSummary.style.display = 'none';
        return;
    }
    
    cartItemsContainer.style.display = 'block';
    emptyCartDiv.classList.add('d-none');
    orderSummary.style.display = 'block';
    
    cartItemsContainer.innerHTML = '';
    
    cartItems.forEach((item, index) => {
        const cartItem = createCartItemElement(item, index);
        cartItemsContainer.appendChild(cartItem);
    });
}

// Create cart item element
function createCartItemElement(item, index) {
    const div = document.createElement('div');
    div.className = 'cart-item p-4';
    
    div.innerHTML = `
        <div class="row align-items-center">
            <div class="col-md-2">
                <img src="${item.image}" alt="${item.name}" class="product-image">
            </div>
            <div class="col-md-4">
                <h5 class="mb-1">${item.name}</h5>
                <p class="text-muted small mb-0">${item.description}</p>
            </div>
            <div class="col-md-2">
                <span class="price-text">${formatCurrency(item.price)}</span>
            </div>
            <div class="col-md-3">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="col-md-1">
                <button class="btn btn-danger-custom btn-sm" onclick="removeItem(${index})" title="Xóa sản phẩm">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12">
                <div class="d-flex justify-content-between">
                    <small class="text-muted">Thành tiền:</small>
                    <strong class="price-text">${formatCurrency(item.price * item.quantity)}</strong>
                </div>
            </div>
        </div>
    `;
    
    return div;
}

// Update item quantity
function updateQuantity(index, change) {
    if (index < 0 || index >= cartItems.length) return;
    
    cartItems[index].quantity += change;
    
    if (cartItems[index].quantity <= 0) {
        removeItem(index);
        return;
    }
    
    saveCartToStorage();
    renderCart();
    updateCartSummary();
    showNotification('Đã cập nhật số lượng sản phẩm');
}

// Remove item from cart
function removeItem(index) {
    if (index < 0 || index >= cartItems.length) return;
    
    const removedItem = cartItems[index];
    cartItems.splice(index, 1);
    
    saveCartToStorage();
    renderCart();
    updateCartSummary();
    showNotification(`Đã xóa ${removedItem.name} khỏi giỏ hàng`);
}

// Update cart summary
function updateCartSummary() {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCountSpan.textContent = totalItems;
    subtotalSpan.textContent = formatCurrency(subtotal);
    totalSpan.textContent = formatCurrency(subtotal);
}

// Show checkout form
function showCheckoutForm() {
    orderSummary.style.display = 'none';
    checkoutForm.classList.remove('d-none');
    
    // Scroll to form
    checkoutForm.scrollIntoView({ behavior: 'smooth' });
}

// Hide checkout form
function hideCheckoutForm() {
    orderSummary.style.display = 'block';
    checkoutForm.classList.add('d-none');
}

// Handle order form submission
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('customerName').value,
        phone: document.getElementById('customerPhone').value,
        email: document.getElementById('customerEmail').value,
        address: document.getElementById('customerAddress').value,
        note: document.getElementById('orderNote').value,
        items: cartItems,
        total: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };
    
    // Simulate order processing
    simulateOrderProcessing(formData);
});

// Simulate order processing
function simulateOrderProcessing(orderData) {
    // Show loading state
    const submitBtn = orderForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Đang xử lý...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset form
        orderForm.reset();
        
        // Clear cart
        cartItems = [];
        saveCartToStorage();
        
        // Show success message
        showNotification('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.', 'success');
        
        // Reset UI
        renderCart();
        updateCartSummary();
        hideCheckoutForm();
        
        // Reset submit button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Log order data (in real app, this would be sent to server)
        console.log('Order Data:', orderData);
        
    }, 2000);
}

// Add item to cart (for external use)
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cartItems.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({ ...product, quantity });
    }
    
    saveCartToStorage();
    updateCartSummary();
    showNotification(`Đã thêm ${product.name} vào giỏ hàng`);
}

// Clear entire cart
function clearCart() {
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng?')) {
        cartItems = [];
        saveCartToStorage();
        renderCart();
        updateCartSummary();
        showNotification('Đã xóa toàn bộ giỏ hàng');
    }
}

// Export functions for external use
window.cartFunctions = {
    addToCart,
    clearCart,
    getCartItems: () => cartItems,
    getCartTotal: () => cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
};