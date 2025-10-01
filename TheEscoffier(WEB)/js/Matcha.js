// Dữ liệu cho các sản phẩm
const products = [
    { id: 1, name: 'Matcha Latte', price: '45.000 VNĐ', image: '../images/Matchalatte.jpg', description: 'Matcha Latte - đây là sự kết hợp của bột trà xanh hoà quyện cùng sữa tươi nóng. Chút chát nhẹ nơi đầu lưỡi. Chút thanh thoát từ sữa tươi. Bạn sẽ đắm chìm trong dư vị từ đất nước mặt trời mọc trước khi kịp nhận ra ly Matcha Latte trên tay đã hết từ lúc nào.' },
    { id: 2, name: 'Cà phê Matcha Latte', price: '55.000 VNĐ', image: '../images/Caphematcha.jpg', description: 'Với 3 tầng nguyên liệu gồm: sữa tươi nóng, matcha, cà phê, vị giác của bạn sẽ được đánh thức từ cái nhấp môi đầu tiên. Các nguyên liệu hoà quyện nhưng không hoà lẫn. Bạn vẫn có thể cảm nhận rõ ràng được từng hương vị, đan xen giữa sự tổng hoà hoàn hảo của - Coffee Matcha Latte.' },
    { id: 3, name: 'Matcha Dừa Đá', price: '35.000 VNĐ', image: '../images/Matchadua.jpg', description: 'Matcha Dừa Đá - thức uống lạnh với thành phần chính là nước dừa tươi và bột trà xanh. Khi kết hợp 2 nguyên liệu với nhau sẽ cho ra một thức uống mùa hè với nhiều lớp hương vị sảng khoái. Vị ngọt của nước dừa nguyên chất và vị chát nhẹ của matcha hòa quyện trong miệng như mang đến sự mát mẻ từ thiên nhiên trong mùa hè oi ả.' },
    { id: 4, name: 'Matcha Dừa Xoài', price: '40.000 VNĐ', image: '../images/Matchaduaxoai.jpg', description: 'Matcha Dừa Xoài - Bạn có thể cảm nhận được chất lỏng mát lạnh trên đầu lưỡi theo từng ngụm, xua tan cái nóng mùa hè. Một chút thơm ngọt của xoài, chút béo ngậy thơm nức của sữa dừa kết hợp với vị chát nhẹ của trà xanh.' },
    { id: 5, name: 'Matcha Dâu Tây', price: '40.000 VNĐ', image: '../images/Matchadau.jpg', description: 'Matcha Dâu Tây - Lớp matcha kem béo như tan ngay trong miệng, kết hợp với vị chua dịu của dây tây và topping dâu tây sẽ càng thêm hấp dẫn.' },
];



// Hàm hiển thị hộp thông báo tạm thời
function showMessage(message) {
    const messageBox = document.getElementById('message-box');
    messageBox.textContent = message;
    messageBox.classList.add('show');

    setTimeout(() => {
        messageBox.classList.remove('show');
    }, 3000);
}

// Hàm render các sản phẩm
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-sm-6 col-lg-4';

        productCard.innerHTML = `
            <div class="card h-100 product-card-hover shadow-sm">
                <div style="height: 280px; overflow: hidden;">
                    <img src="${product.image}" class="card-img-top h-100 object-fit-cover" alt="${product.name}">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">
                        <a href="javascript:void(0)" class="text-decoration-none text-brown">${product.name}</a>
                    </h5>
                    <p class="card-text text-amber fw-bold">${product.price}</p>
                    <button onclick="showProductDetail(${product.id})" class="btn btn-amber mt-auto">
                        Mua Ngay
                    </button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Hàm render các sản phẩm liên quan
function renderRelatedProducts(currentProductId) {
    const relatedProductsList = document.getElementById('related-products-list');
    relatedProductsList.innerHTML = '';

    const related = products.filter(p => p.id !== currentProductId).slice(0, 3);

    related.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-sm-6 col-lg-4';

        productCard.innerHTML = `
            <div class="card h-100 product-card-hover shadow-sm">
                <div style="height: 200px; overflow: hidden;">
                    <img src="${product.image}" class="card-img-top h-100 object-fit-cover" alt="${product.name}">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">
                        <a href="javascript:void(0)" class="text-decoration-none text-brown">${product.name}</a>
                    </h5>
                    <p class="card-text text-amber fw-bold">${product.price}</p>
                    <button onclick="showProductDetail(${product.id})" class="btn btn-amber mt-auto">
                        Mua Ngay
                    </button>
                </div>
            </div>
        `;
        relatedProductsList.appendChild(productCard);
    });
}

// Hàm hiển thị chi tiết sản phẩm
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        return;
    }

    // Cập nhật phần chi tiết sản phẩm
    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-image').alt = product.name;
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-price').textContent = product.price;
    document.getElementById('detail-description').textContent = product.description;

    // Khởi tạo số lượng
    const quantitySpan = document.getElementById('product-quantity');
    quantitySpan.textContent = '1';

    // Cập nhật nút "Thêm vào giỏ hàng" với ID sản phẩm
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    addToCartBtn.setAttribute('data-product-id', productId);
    addToCartBtn.setAttribute('onclick', `addToCart(${productId})`);

    // Gắn các sự kiện cho nút điều chỉnh số lượng
    document.getElementById('increase-qty').onclick = () => updateQuantity(1);
    document.getElementById('decrease-qty').onclick = () => updateQuantity(-1);

    // Hiển thị khung chi tiết và ẩn lưới sản phẩm
    document.getElementById('product-grid').classList.add('d-none');
    document.getElementById('product-detail-view').classList.remove('d-none');

    // Render các sản phẩm liên quan
    renderRelatedProducts(productId);
}

// Hàm ẩn khung chi tiết sản phẩm
function hideProductDetail() {
    document.getElementById('product-grid').classList.remove('d-none');
    document.getElementById('product-detail-view').classList.add('d-none');
}

// Hàm cập nhật số lượng sản phẩm
function updateQuantity(change) {
    const quantitySpan = document.getElementById('product-quantity');
    let currentQty = parseInt(quantitySpan.textContent, 10);
    currentQty += change;
    if (currentQty < 1) {
        currentQty = 1;
    }
    quantitySpan.textContent = currentQty;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById('product-quantity').textContent, 10);

    if (window.cartManager) {
        window.cartManager.addToCart(product, quantity);
    } else {
        console.error("CartManager chưa được khởi tạo!");
    }
}

// Hàm cập nhật số lượng trong giỏ hàng
function updateCartCount() {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}




// Render ban đầu khi trang tải xong
document.addEventListener('DOMContentLoaded', function () {
    renderProducts();

    // Thêm hiệu ứng hover cho các link
    document.querySelectorAll('.hover-amber').forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.color = 'var(--amber-600)';
        });
        link.addEventListener('mouseleave', function () {
            this.style.color = '';
        });
    });
});