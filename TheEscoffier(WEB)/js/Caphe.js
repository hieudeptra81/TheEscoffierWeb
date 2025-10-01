// Dữ liệu cho các sản phẩm
const products = [
    { id: 1, name: 'Cà phê sữa đá', price: '45.000 VNĐ', image: '../images/Caphesua.jpg', description: 'Hương vị cà phê đậm đà hòa quyện cùng vị ngọt của sữa đặc, tạo nên một thức uống truyền thống được nhiều người yêu thích.' },
    { id: 2, name: 'Cà phê sữa nóng', price: '45.000 VNĐ', image: '../images/caphesuanong.jpg', description: 'Một ly cà phê sữa ấm áp, thơm lừng, giúp bạn tỉnh táo và tràn đầy năng lượng cho ngày mới.' },
    { id: 3, name: 'Cà phê muối', price: '45.000 VNĐ', image: '../images/Caphemuoi.jpg', description: 'Sự kết hợp độc đáo giữa vị cà phê truyền thống và chút mặn mà của muối, tạo nên một hương vị lạ miệng và hấp dẫn.' },
    { id: 4, name: 'Cà phê đen đá', price: '40.000 VNĐ', image: '../images/capheda.jpg', description: 'Thức uống cổ điển với vị cà phê đen đậm, mạnh mẽ, mang lại cảm giác tỉnh táo tức thì.' },
    { id: 5, name: 'Cà phê đen nóng', price: '40.000 VNĐ', image: '../images/capheden.jpg', description: 'Hương thơm nồng nàn và vị đắng nhẹ của cà phê đen nóng là lựa chọn hoàn hảo cho những ai yêu thích sự đơn giản.' },
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