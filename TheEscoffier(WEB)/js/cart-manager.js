// Global Cart Management System
class CartManager {
    constructor() {
        this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.init();
    }

    init() {
        this.updateCartCount();
        // Listen for storage changes from other tabs
        window.addEventListener('storage', (e) => {
            if (e.key === 'cartItems') {
                this.cartItems = JSON.parse(e.newValue) || [];
                this.updateCartCount();
            }
        });
    }

    // Add item to cart
    addToCart(product, quantity = 1) {
        const existingItem = this.cartItems.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cartItems.push({ 
                ...product, 
                quantity: quantity,
                // Convert price string to number for calculations
                price: this.parsePrice(product.price)
            });
        }
        
        this.saveToStorage();
        this.updateCartCount();
        this.showMessage(`Đã thêm ${quantity} ${product.name} vào giỏ hàng!`);
        
        return true;
    }

    // Remove item from cart
    removeFromCart(productId) {
        const itemIndex = this.cartItems.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            const removedItem = this.cartItems[itemIndex];
            this.cartItems.splice(itemIndex, 1);
            this.saveToStorage();
            this.updateCartCount();
            this.showMessage(`Đã xóa ${removedItem.name} khỏi giỏ hàng!`);
            return true;
        }
        return false;
    }

    // Update item quantity
    updateQuantity(productId, newQuantity) {
        const item = this.cartItems.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                return this.removeFromCart(productId);
            }
            item.quantity = newQuantity;
            this.saveToStorage();
            this.updateCartCount();
            return true;
        }
        return false;
    }

    // Get cart items
    getCartItems() {
        return this.cartItems;
    }

    // Get total items count
    getTotalItems() {
        return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    // Get total price
    getTotalPrice() {
        return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Clear cart
    clearCart() {
        this.cartItems = [];
        this.saveToStorage();
        this.updateCartCount();
        this.showMessage('Đã xóa toàn bộ giỏ hàng!');
    }

    // Save to localStorage
    saveToStorage() {
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        // Trigger storage event for other tabs
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'cartItems',
            newValue: JSON.stringify(this.cartItems)
        }));
    }

    // Update cart count display
    updateCartCount() {
        const cartCountElements = document.querySelectorAll('#cart-count, .cart-count');
        const totalItems = this.getTotalItems();
        
        cartCountElements.forEach(element => {
            if (element) {
                element.textContent = totalItems;
                // Add animation when count changes
                element.classList.add('cart-count-animate');
                setTimeout(() => {
                    element.classList.remove('cart-count-animate');
                }, 300);
            }
        });
    }

    // Parse price string to number
    parsePrice(priceString) {
        if (typeof priceString === 'number') return priceString;
        // Remove "VNĐ" and dots, convert to number
        return parseInt(priceString.replace(/[^\d]/g, ''));
    }

    // Format price for display
    formatPrice(price) {
        return new Intl.NumberFormat('vi-VN').format(price) + ' VNĐ';
    }

    // Show notification message
    showMessage(message, type = 'success') {
        // Try to use existing message system first
        if (window.showMessage && typeof window.showMessage === 'function') {
            window.showMessage(message);
            return;
        }

        // Fallback notification system
        this.createNotification(message, type);
    }

    // Create notification element
    createNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.cart-notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `cart-notification fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-lg transition-all duration-300 ${
            type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`;
        notification.style.transform = 'translate(-50%, -20px)';
        notification.style.opacity = '0';
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translate(-50%, 0)';
            notification.style.opacity = '1';
        }, 10);

        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translate(-50%, -20px)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Navigate to cart page
    goToCart() {
        window.location.href = 'cart.html';
    }
}

// Create global cart manager instance
window.cartManager = new CartManager();

// Global functions for backward compatibility
window.addToCart = function(productId, quantity = 1) {
    // Find product from global products array or create from ID
    let product;
    if (window.products && Array.isArray(window.products)) {
        product = window.products.find(p => p.id === productId);
    }
    
    if (!product) {
        console.error('Product not found:', productId);
        return false;
    }

    // Get quantity from UI if available
    const quantityElement = document.getElementById('product-quantity');
    if (quantityElement && quantity === 1) {
        quantity = parseInt(quantityElement.textContent) || 1;
    }

    return window.cartManager.addToCart(product, quantity);
};

window.openCartModal = function() {
    window.cartManager.goToCart();
};

// Add CSS for cart count animation
const style = document.createElement('style');
style.textContent = `
    .cart-count-animate {
        animation: cartBounce 0.3s ease-in-out;
    }
    
    @keyframes cartBounce {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1); }
    }
    
    .cart-notification {
        font-weight: 600;
        font-size: 14px;
        max-width: 90vw;
        text-align: center;
    }
    
    #cart-count {
        transition: all 0.3s ease;
    }
    
    #cart-count:not(:empty) {
        display: inline-flex !important;
    }
`;
document.head.appendChild(style);