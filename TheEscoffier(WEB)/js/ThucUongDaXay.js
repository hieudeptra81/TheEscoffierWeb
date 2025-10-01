// Dữ liệu cho các sản phẩm
const products = [
    { id: 1, name: 'Smoothies Dâu', price: '45.000 VNĐ', image: '../images/dau.jpg', description: 'Hương ngọt ngào, sắc đỏ quyến rũ của những trái dâu tây tươi mọng nước, hòa quyện cùng sữa chua và sữa tươi. Thức uống này là bữa sáng hoàn hảo hoặc một món ăn nhẹ tràn đầy năng lượng, mang đến hương vị tuổi thơ tươi mát và đầy lôi cuốn.' },
    { id: 2, name: 'Smoothies Chuối', price: '45.000 VNĐ', image: '../images/chuoi.jpg', description: 'Sự kết hợp "hoàn hảo bất bại" giữa chuối chín thơm lừng và bơ đậu phộng béo ngậy, tạo nên một ly smoothie sánh mịn như một ly kem lạnh. Thức uống lý tưởng cho một bữa sáng di động, trước hoặc sau buổi tập, cung cấp nguồn năng lượng bền vững và cảm giác no lâu.' },
    { id: 3, name: 'Smoothies Thơm', price: '45.000 VNĐ', image: '../images/Khom.jpg', description: 'Hãy tưởng tượng bạn đang tận hưởng kỳ nghỉ trên một bãi biển nhiệt đới. Vị chua ngọt sảng khoái của dứa tươi hòa cùng cảm giác the mát tinh tế của lá bạc hà. Thức uống này như một liều thuốc giải khát tức thì, xua tan mọi mệt mỏi và mang lại sự sảng khoái tuyệt đối.' },
    { id: 4, name: 'Smoothies Việt Quất', price: '40.000 VNĐ', image: '../images/blueberry.jpg', description: 'Việt quất tươi với vị chua ngọt đặc trưng và màu tím biếc đầy mê hoặc, được xay nhuyễn cùng yến mạch giàu dinh dưỡng. Ly smoothie này không chỉ ngon miệng mà còn là một lựa chọn thông minh cho sức khỏe, giúp bạn no lâu và cung cấp nguồn năng lượng dồi dào cho cả buổi sáng.' },
];
// Trạng thái giỏ hàng
let cartItems = [];

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