// =======================================
// =========== LOGIN PAGE ===============
// =======================================
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "") {
            alert("Email tidak boleh kosong!");
            return;
        }

        if (password === "") {
            alert("Password tidak boleh kosong!");
            return;
        }

        alert("Login Berhasil. Selamat datang!");

        window.location.href = "dashboard.html";
    });
}
  

// =======================================
// ========== DASHBOARD PAGE ============
// =======================================
const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");

if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("show");
    });
}

const cardProduct = document.getElementById("card-product");

if (cardProduct) {
    cardProduct.addEventListener("click", function () {
        window.location.href = "products.html";
    });
}

function goHome() {
    window.location.href = "dashboard.html";
}

document.addEventListener("DOMContentLoaded", () => {

    const totalProduct = 42;
    const totalSales = 318;
    const totalRevenue = 12500000; // 12.500.000

    document.getElementById("totalProduct").textContent = totalProduct;
    document.getElementById("totalSales").textContent = totalSales;
    document.getElementById("totalRevenue").textContent =
        "Rp " + totalRevenue.toLocaleString("id-ID");
});


// =======================================
// =========== PRODUCTS PAGE ============
// =======================================
const productTableBody = document.getElementById("productTableBody");

if (productTableBody) {

    const products = [
        { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
        { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
        { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
    ];

    const renderProducts = () => {
        productTableBody.innerHTML = "";

        products.forEach((item, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>Rp ${item.price.toLocaleString("id-ID")}</td>
                <td>${item.stock}</td>
                <td>
                    <img src="img/edit.png" class="action-icon" onclick="editProduct(${item.id})">
                    <img src="img/delete.png" class="action-icon" onclick="deleteProduct(${item.id})">
                </td>
            `;

            productTableBody.appendChild(row);
        });
    };

    renderProducts();

    window.editProduct = function (id) {
        alert("Edit produk ID: " + id);
    };

    window.deleteProduct = function (id) {
        if (confirm("Yakin ingin menghapus produk ini?")) {
            alert("Produk ID " + id + " dihapus.");
        }
    };
}

const btnViewProduct = document.querySelector(".view-product-btn");

if (btnViewProduct) {
    btnViewProduct.addEventListener("click", () => {
        window.location.href = "products.html";
    });
}