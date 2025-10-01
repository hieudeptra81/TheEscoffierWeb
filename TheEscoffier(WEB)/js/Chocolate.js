// Dữ liệu cho các sản phẩm
const products = [
    { id: 1, name: 'Chocolate Đá', price: '55.000 VNĐ', image: '../images/chocolateda.jpg', description: 'Một sự kết hợp hoàn hảo giữa vị đắng đặc trưng của cacao và sự ngọt dịu mát lạnh của đá, mang lại cảm giác sảng khoái bất tận.' },
    { id: 2, name: 'Chocolate Nóng', price: '50.000 VNĐ', image: '../images/chocolatenong.jpg', description: 'Ly chocolate nóng hổi, thơm lừng, là thức uống tuyệt vời để thư giãn và làm ấm cơ thể trong những ngày se lạnh.' },
    { id: 3, name: 'Mocha', price: '45.000 VNĐ', image: '../images/mocha.jpg', description: 'Cà phê Espresso đậm đà hòa quyện cùng sốt sô-cô-la đen hảo hạng, được phủ lên trên bằng một lớp kem tươi bồng bềnh và rưới thêm chút sô-cô-la bào. Một kiệt tác dành cho những ai đam mê vị đắng nhẹ của cà phê và vị ngọt ngào của sô-cô-la.' },
    { id: 4, name: 'Chocolate Trắng', price: '45.000 VNĐ', image: '../images/chocolatetrang.jpg', description: 'Một ly thức uống êm dịu với hương vị sữa ngọt ngào, thơm béo của chocolate trắng thượng hạng. Thức uống hoàn hảo thay thế cà phê, mang đến cảm giác ấm áp và vui vẻ cho mọi khoảnh khắc. Thức uống này không chứa cà phê, mang đến một hương vị ngọt ngào, thanh tao và vô cùng dễ chịu. Trên cùng là đỉnh núi kem tươi vani bông xốp và những mảnh chocolate trắng giòn tan, chắc chắn sẽ chinh phục trái tim của bất kỳ ai, từ trẻ nhỏ đến người lớn.' },
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

// Hàm thêm sản phẩm vào giỏ hàng
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

// Hàm tạm thời để mở giỏ hàng (chưa được triển khai)
function openCartModal() {
    showMessage("Chức năng giỏ hàng đang được phát triển.");
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