// Dữ liệu cho tất cả các danh mục sản phẩm
const allProducts = {
    cake: [
        { id: 1, name: 'Bánh Bông Lan', price: '30.000 VNĐ', image: '../images/BongLan.jpg', description: 'Chiếc bánh với lớp phô mai vàng sánh mịn bên trong, được bọc ngoài lớp vỏ xốp mềm thơm lừng. Thêm lớp chà bông mằn mặn hấp dẫn bên trên.' },
        { id: 2, name: 'Tiramisu', price: '50.000 VNĐ', image: '../images/Tiramisu.jpg', description: 'Tiramisu - Lớp kem phô mai mascarpone béo ngậy, mịn màng hòa quyện cùng cốt bánh ladyfinger thấm đẫm cà phê espresso đậm đà và rượu rum thơm lừng. Rắc thêm chút bột cacao nguyên chất ở trên, Tiramisu của chúng tôi là bản giao hưởng hoàn hảo của vị đắng, ngọt và béo.' },
        { id: 3, name: 'Bánh Oreo', price: '20.000 VNĐ', image: '../images/Oreo.jpg', description: 'Oreo - Món bánh quy sô cô la kinh điển với lớp kem vani ngọt ngào ở giữa. Giòn rụm và thơm ngon, Oreo là lựa chọn hoàn hảo để thưởng thức cùng một ly sữa lạnh hoặc nhúng vào cà phê nóng.' },
        { id: 4, name: 'Bánh Donut', price: '82.000 VNĐ', image: '../images/Donut.jpg', description: 'Donut - Những chiếc bánh vòng tròn đầy màu sắc và hương vị. Lớp vỏ bánh mềm xốp, thơm lừng, được phủ lên trên là các loại sốt và topping hấp dẫn như sô cô la, dâu tây, vani và nhiều hơn nữa. Donut là lựa chọn hoàn hảo để thêm chút ngọt ngào và vui vẻ vào buổi cà phê của bạn, đặc biệt là khi dùng kèm với một ly cà phê đậm đà.' },
        { id: 5, name: 'Bánh Cup Cake', price: '92.000 VNĐ', image: '../images/cupcake.jpg', description: 'Cupcake - Những chiếc bánh nhỏ xinh, ngọt ngào đầy cá tính. Lớp bánh bông lan mềm ẩm, nhẹ nhàng kết hợp với lớp kem bơ béo ngậy được trang trí tinh tế. Mỗi chiếc cupcake là một tác phẩm nghệ thuật, mang đến sự lựa chọn đa dạng từ sô cô la, vani đến trà xanh, dâu tây... Chúng là điểm nhấn hoàn hảo cho những cuộc hẹn hò hoặc đơn giản chỉ là để tự thưởng cho bản thân một khoảnh khắc thư giãn.' },
    ],
    coffee: [
        { id: 1, name: 'Cà phê sữa đá', price: '45.000 VNĐ', image: '../images/Caphesua.jpg', description: 'Hương vị cà phê đậm đà hòa quyện cùng vị ngọt của sữa đặc, tạo nên một thức uống truyền thống được nhiều người yêu thích.' },
        { id: 2, name: 'Cà phê sữa nóng', price: '45.000 VNĐ', image: '../images/caphesuanong.jpg', description: 'Một ly cà phê sữa ấm áp, thơm lừng, giúp bạn tỉnh táo và tràn đầy năng lượng cho ngày mới.' },
        { id: 3, name: 'Cà phê muối', price: '45.000 VNĐ', image: '../images/Caphemuoi.jpg', description: 'Sự kết hợp độc đáo giữa vị cà phê truyền thống và chút mặn mà của muối, tạo nên một hương vị lạ miệng và hấp dẫn.' },
        { id: 4, name: 'Cà phê đen đá', price: '40.000 VNĐ', image: '../images/capheda.jpg', description: 'Thức uống cổ điển với vị cà phê đen đậm, mạnh mẽ, mang lại cảm giác tỉnh táo tức thì.' },
        { id: 5, name: 'Cà phê đen nóng', price: '40.000 VNĐ', image: '../images/capheden.jpg', description: 'Hương thơm nồng nàn và vị đắng nhẹ của cà phê đen nóng là lựa chọn hoàn hảo cho những ai yêu thích sự đơn giản.' },
    ],
    chocolate: [
        { id: 1, name: 'Chocolate Đá', price: '55.000 VNĐ', image: '../images/chocolateda.jpg', description: 'Một sự kết hợp hoàn hảo giữa vị đắng đặc trưng của cacao và sự ngọt dịu mát lạnh của đá, mang lại cảm giác sảng khoái bất tận.' },
        { id: 2, name: 'Chocolate Nóng', price: '50.000 VNĐ', image: '../images/chocolatenong.jpg', description: 'Ly chocolate nóng hổi, thơm lừng, là thức uống tuyệt vời để thư giãn và làm ấm cơ thể trong những ngày se lạnh.' },
        { id: 3, name: 'Mocha', price: '45.000 VNĐ', image: '../images/mocha.jpg', description: 'Cà phê Espresso đậm đà hòa quyện cùng sốt sô-cô-la đen hảo hạng, được phủ lên trên bằng một lớp kem tươi bồng bềnh và rưới thêm chút sô-cô-la bào. Một kiệt tác dành cho những ai đam mê vị đắng nhẹ của cà phê và vị ngọt ngào của sô-cô-la.' },
        { id: 4, name: 'Chocolate Trắng', price: '45.000 VNĐ', image: '../images/chocolatetrang.jpg', description: 'Một ly thức uống êm dịu với hương vị sữa ngọt ngào, thơm béo của chocolate trắng thượng hạng. Thức uống hoàn hảo thay thế cà phê, mang đến cảm giác ấm áp và vui vẻ cho mọi khoảnh khắc. Thức uống này không chứa cà phê, mang đến một hương vị ngọt ngào, thanh tao và vô cùng dễ chịu. Trên cùng là đỉnh núi kem tươi vani bông xốp và những mảnh chocolate trắng giòn tan, chắc chắn sẽ chinh phục trái tim của bất kỳ ai, từ trẻ nhỏ đến người lớn.' },
    ],
    matcha: [
        { id: 1, name: 'Matcha Latte', price: '45.000 VNĐ', image: '../images/Matchalatte.jpg', description: 'Matcha Latte - đây là sự kết hợp của bột trà xanh hoà quyện cùng sữa tươi nóng. Chút chát nhẹ nơi đầu lưỡi. Chút thanh thoát từ sữa tươi. Bạn sẽ đắm chìm trong dư vị từ đất trời mặt trời mọc trước khi kịp nhận ra ly Matcha Latte trên tay đã hết từ lúc nào.' },
        { id: 2, name: 'Cà phê Matcha Latte', price: '55.000 VNĐ', image: '../images/Caphematcha.jpg', description: 'Với 3 tầng nguyên liệu gồm: sữa tươi nóng, matcha, cà phê, vị giác của bạn sẽ được đánh thức từ cái nhấp môi đầu tiên. Các nguyên liệu hoà quyện nhưng không hoà lẫn. Bạn vẫn có thể cảm nhận rõ ràng được từng hương vị, đan xen giữa sự tổng hoà hoàn hảo của - Coffee Matcha Latte.' },
        { id: 3, name: 'Matcha Dừa Đá', price: '35.000 VNĐ', image: '../images/Matchadua.jpg', description: 'Matcha Dừa Đá - thức uống lạnh với thành phần chính là nước dừa tươi và bột trà xanh. Khi kết hợp 2 nguyên liệu với nhau sẽ cho ra một thức uống mùa hè với nhiều lớp hương vị sảng khoái. Vị ngọt của nước dừa nguyên chất và vị chát nhẹ của matcha hòa quyện trong miệng như mang đến sự mát mẻ từ thiên nhiên trong mùa hè oi ả.' },
        { id: 4, name: 'Matcha Dừa Xoài', price: '40.000 VNĐ', image: '../images/Matchaduaxoai.jpg', description: 'Matcha Dừa Xoài - Bạn có thể cảm nhận được chất lỏng mát lạnh trên đầu lưỡi theo từng ngụm, xua tan cái nóng mùa hè. Một chút thơm ngọt của xoài, chút béo ngậy thơm nức của sữa dừa kết hợp với vị chát nhẹ của trà xanh.' },
        { id: 5, name: 'Matcha Dâu Tây', price: '40.000 VNĐ', image: '../images/Matchadau.jpg', description: 'Matcha Dâu Tây - Lớp matcha kem béo như tan ngay trong miệng, kết hợp với vị chua dịu của dây tây và topping dâu tây sẽ càng thêm hấp dẫn.' },
    ],
    smoothies: [
        { id: 1, name: 'Smoothies Dâu', price: '45.000 VNĐ', image: '../images/dau.jpg', description: 'Hương ngọt ngào, sắc đỏ quyến rũ của những trái dâu tây tươi mọng nước, hòa quyện cùng sữa chua và sữa tươi. Thức uống này là bữa sáng hoàn hảo hoặc một món ăn nhẹ tràn đầy năng lượng, mang đến hương vị tuổi thơ tươi mát và đầy lôi cuốn.' },
        { id: 2, name: 'Smoothies Chuối', price: '45.000 VNĐ', image: '../images/chuoi.jpg', description: 'Sự kết hợp "hoàn hảo bất bại" giữa chuối chín thơm lừng và bơ đậu phộng béo ngậy, tạo nên một ly smoothie sánh mịn như một ly kem lạnh. Thức uống lý tưởng cho một bữa sáng di động, trước hoặc sau buổi tập, cung cấp nguồn năng lượng bền vững và cảm giác no lâu.' },
        { id: 3, name: 'Smoothies Thơm', price: '45.000 VNĐ', image: '../images/Khom.jpg', description: 'Hãy tưởng tượng bạn đang tận hưởng kỳ nghỉ trên một bãi biển nhiệt đới. Vị chua ngọt sảng khoái của dứa tươi hòa cùng cảm giác the mát tinh tế của lá bạc hà. Thức uống này như một liều thuốc giải khát tức thì, xua tan mọi mệt mỏi và mang lại sự sảng khoái tuyệt đối.' },
        { id: 4, name: 'Smoothies Việt Quất', price: '40.000 VNĐ', image: '../images/blueberry.jpg', description: 'Việt quất tươi với vị chua ngọt đặc trưng và màu tím biếc đầy mê hoặc, được xay nhuyễn cùng yến mạch giàu dinh dưỡng. Ly smoothie này không chỉ ngon miệng mà còn là một lựa chọn thông minh cho sức khỏe, giúp bạn no lâu và cung cấp nguồn năng lượng dồi dào cho cả buổi sáng.' },
    ],
    home: [
        { id: 1, name: 'Cà Phê Đen Đá Hộp (14 gói x 16g)', price: '66.000 VNĐ', image: '../images/caphedendahop.jpg', description: 'Cà Phê Đen Đá hoà tan The Escoffier với 100% hạt cà phê Robusta mang đến hương vị mạnh cực bốc, đậm đắng đầy lôi cuốn, đúng gu người Việt.' },
        { id: 2, name: 'Cà Phê Sữa Đá Hòa Tan Túi (25x22g)', price: '127.000 VNĐ', image: '../images/caphesuadahoatantui.jpg', description: 'Thật dễ dàng để bắt đầu ngày mới với tách cà phê sữa đá sóng sánh, thơm ngon như cà phê pha phin. Vị đắng thanh của cà phê hoà quyện với vị ngọt béo của sữa, giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.' },
        { id: 3, name: 'Trà Hộp Hồng Trà Dên (24x15g)', price: '45.000 VNĐ', image: '../images/Tra.jpg', description: 'Nền trà oolong hảo hạng kết hợp cùng hạt sen tươi, bùi bùi và lớp foam cheese béo ngậy. Trà hạt sen là thức uống thanh mát, nhẹ nhàng phù hợp cho cả buổi sáng và chiều tối.' },
        { id: 4, name: 'Cà Phê Rang Xay Original 1 (250G)', price: '82.000 VNĐ', image: '../images/capherangxay.jpg', description: 'Cà phê Original 1 của The Coffee House với thành phần chính cà phê Robusta Đắk Lắk, vùng trồng cà phê nổi tiếng nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.' },
        { id: 5, name: 'Matcha Nguyên Bản Túi (230g)', price: '182.000 VNĐ', image: '../images/Matchatui.jpg', description: 'Matcha - Bột trà xanh nguyên chất được nhập khẩu, mang hương vị thanh mát và màu xanh ngọc bích đặc trưng. Matcha của chúng tôi phù hợp để pha các loại đồ uống từ Matcha Latte ấm nóng đến Matcha đá xay mát lạnh, mang lại sự tỉnh táo và thư thái cho cả ngày dài.' },
    ]
};

// Trạng thái toàn cục
let currentCategory = '';
let cartItems = [];
let products = [];

// Hàm khởi tạo trang với danh mục cụ thể
function initializePage(category) {
    currentCategory = category;
    products = allProducts[category] || [];

    if (products.length > 0) {
        renderProducts();
    } else {
        console.error(`Không tìm thấy danh mục: ${category}`);
    }
}

// Hàm hiển thị hộp thông báo tạm thời
function showMessage(message) {
    const messageBox = document.getElementById('message-box');
    if (!messageBox) {
        console.warn('Không tìm thấy message-box element');
        return;
    }

    messageBox.textContent = message;
    messageBox.classList.add('show');

    setTimeout(() => {
        messageBox.classList.remove('show');
    }, 3000);
}

// Hàm render các sản phẩm
function renderProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) {
        console.warn('Không tìm thấy product-list element');
        return;
    }

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
    if (!relatedProductsList) return;

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
    const detailImage = document.getElementById('detail-image');
    const detailName = document.getElementById('detail-name');
    const detailPrice = document.getElementById('detail-price');
    const detailDescription = document.getElementById('detail-description');

    if (detailImage) detailImage.src = product.image;
    if (detailImage) detailImage.alt = product.name;
    if (detailName) detailName.textContent = product.name;
    if (detailPrice) detailPrice.textContent = product.price;
    if (detailDescription) detailDescription.textContent = product.description;

    // Khởi tạo số lượng
    const quantitySpan = document.getElementById('product-quantity');
    if (quantitySpan) quantitySpan.textContent = '1';

    // Cập nhật nút "Thêm vào giỏ hàng" với ID sản phẩm
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.setAttribute('data-product-id', productId);
        addToCartBtn.setAttribute('onclick', `addToCart(${productId})`);
    }

    // Gắn các sự kiện cho nút điều chỉnh số lượng
    const increaseBtn = document.getElementById('increase-qty');
    const decreaseBtn = document.getElementById('decrease-qty');

    if (increaseBtn) increaseBtn.onclick = () => updateQuantity(1);
    if (decreaseBtn) decreaseBtn.onclick = () => updateQuantity(-1);

    // Hiển thị khung chi tiết và ẩn lưới sản phẩm
    const productGrid = document.getElementById('product-grid');
    const productDetailView = document.getElementById('product-detail-view');

    if (productGrid) productGrid.classList.add('d-none');
    if (productDetailView) productDetailView.classList.remove('d-none');

    // Render các sản phẩm liên quan
    renderRelatedProducts(productId);
}

// Hàm ẩn khung chi tiết sản phẩm
function hideProductDetail() {
    const productGrid = document.getElementById('product-grid');
    const productDetailView = document.getElementById('product-detail-view');

    if (productGrid) productGrid.classList.remove('d-none');
    if (productDetailView) productDetailView.classList.add('d-none');
}

// Hàm cập nhật số lượng sản phẩm
function updateQuantity(change) {
    const quantitySpan = document.getElementById('product-quantity');
    if (!quantitySpan) return;

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
    const cartCount = document.getElementById('cart-count');
    if (!cartCount) return;

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Hàm tạm thời để mở giỏ hàng (chưa được triển khai)
function openCartModal() {
    showMessage("Chức năng giỏ hàng đang được phát triển.");
}

// Render ban đầu khi trang tải xong
document.addEventListener('DOMContentLoaded', function () {
    // Xác định danh mục hiện tại dựa trên URL hoặc trang hiện tại
    const path = window.location.pathname;
    let category = '';

    if (path.includes('cake')) category = 'cake';
    else if (path.includes('caphe')) category = 'coffee';
    else if (path.includes('chocolate')) category = 'chocolate';
    else if (path.includes('matcha')) category = 'matcha';
    else if (path.includes('thucuongdaxay')) category = 'smoothies';
    else if (path.includes('thuongthuctainha')) category = 'home';

    if (category) {
        initializePage(category);
    }

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