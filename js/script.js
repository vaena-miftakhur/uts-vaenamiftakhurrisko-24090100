/* ===========================
   LOGIN PAGE
=========================== */
if (document.getElementById("loginForm")) {

    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const pass  = document.getElementById("password").value.trim();
        const error = document.getElementById("errorMsg");

        if (email === "" || pass === "") {
            error.textContent = "Email dan password harus diisi!";
            return;
        }

        alert("Login berhasil!");
        window.location.href = "dashboard.html";
    });
}



/* ===========================
   DASHBOARD SUMMARY
=========================== */

const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000
};

if (document.getElementById("totalProducts")) {
    document.getElementById("totalProducts").textContent = summary.totalProducts;
    document.getElementById("totalSales").textContent = summary.totalSales;
    document.getElementById("totalRevenue").textContent =
        "Rp " + summary.totalRevenue.toLocaleString();
}

function goToProducts() {
    window.location.href = "products.html";
}



/* ===========================
   PRODUCTS PAGE
=========================== */

const products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

if (document.getElementById("productTable")) {

    const tbody = document.getElementById("productTable");

    products.forEach((p, i) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${p.name}</td>
            <td>Rp ${p.price.toLocaleString()}</td>

            <!-- STOCK + ICONS JADI 1 KOLOM -->
            <td class="stock-action">
                <span class="stock-number">${p.stock}</span>
                <img src="img/icon-edit.png" class="icon-btn" onclick="editProduct(${p.id})">
                <img src="img/icon-delete.png" class="icon-btn" onclick="deleteRow(this)">
            </td>
        `;

        tbody.appendChild(row);
    });
}

function editProduct(id) {
    alert("Edit produk ID: " + id);
}

function deleteRow(element) {
    if (confirm("Yakin ingin menghapus produk ini?")) {
        element.closest("tr").remove();
    }
}
