// Dữ liệu cho các sản phẩm
const products = [
    { id: 1, name: 'Bánh Bông Lan', price: '30.000 VNĐ', image: '../images/BongLan.jpg', description: 'Chiếc bánh với lớp phô mai vàng sánh mịn bên trong, được bọc ngoài lớp vỏ xốp mềm thơm lừng. Thêm lớp chà bông mằn mặn hấp dẫn bên trên.' },
    { id: 2, name: 'Tiramisu', price: '50.000 VNĐ', image: '../images/Tiramisu.jpg', description: 'Tiramisu - Lớp kem phô mai mascarpone béo ngậy, mịn màng hòa quyện cùng cốt bánh ladyfinger thấm đẫm cà phê espresso đậm đà và rượu rum thơm lừng. Rắc thêm chút bột cacao nguyên chất ở trên, Tiramisu của chúng tôi là bản giao hưởng hoàn hảo của vị đắng, ngọt và béo.' },
    { id: 3, name: 'Bánh Oreo', price: '20.000 VNĐ', image: '../images/Oreo.jpg', description: 'Oreo - Món bánh quy sô cô la kinh điển với lớp kem vani ngọt ngào ở giữa. Giòn rụm và thơm ngon, Oreo là lựa chọn hoàn hảo để thưởng thức cùng một ly sữa lạnh hoặc nhúng vào cà phê nóng.' },
    { id: 4, name: 'Bánh Donut', price: '82.000 VNĐ', image: '../images/Donut.jpg', description: 'Donut - Những chiếc bánh vòng tròn đầy màu sắc và hương vị. Lớp vỏ bánh mềm xốp, thơm lừng, được phủ lên trên là các loại sốt và topping hấp dẫn như sô cô la, dâu tây, vani và nhiều hơn nữa. Donut là lựa chọn hoàn hảo để thêm chút ngọt ngào và vui vẻ vào buổi cà phê của bạn, đặc biệt là khi dùng kèm với một ly cà phê đậm đà.' },
    { id: 5, name: 'Bánh Cup Cake', price: '92.000 VNĐ', image: '../images/cupcake.jpg', description: 'Cupcake - Những chiếc bánh nhỏ xinh, ngọt ngào đầy cá tính. Lớp bánh bông lan mềm ẩm, nhẹ nhàng kết hợp với lớp kem bơ béo ngậy được trang trí tinh tế. Mỗi chiếc cupcake là một tác phẩm nghệ thuật, mang đến sự lựa chọn đa dạng từ sô cô la, vani đến trà xanh, dâu tây... Chúng là điểm nhấn hoàn hảo cho những cuộc hẹn hò hoặc đơn giản chỉ là để tự thưởng cho bản thân một khoảnh khắc thư giãn.' },

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
// Thay hàm addToCart trong cake.js bằng:
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

