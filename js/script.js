// --------------------------------------------------
// LOGIN PAGE
// --------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const pass = document.getElementById("password").value.trim();
            const err = document.getElementById("errorMsg");

            if (email === "" || pass === "") {
                err.textContent = "Email dan password harus diisi!";
                return;
            }

            const validEmail = "vaenamiftakhurrisko@gmail.com";
            const validPassword = "24090100";

            if (email === validEmail && pass === validPassword) {
                alert("Login berhasil!");
                window.location.href = "dashboard.html";
            } else {
                err.textContent = "Email atau password salah!";
            }
        });
    }
});

// --------------------------------------------------
// DASHBOARD DATA
// --------------------------------------------------

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

// --------------------------------------------------
// PRODUCT LIST
// --------------------------------------------------

const products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

const tableBody = document.querySelector("#productTable tbody");

if (tableBody) {
    products.forEach((p, i) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${i + 1}</td>
            <td>${p.name}</td>
            <td>${p.price.toLocaleString()}</td>
            <td>${p.stock}</td>

            <td class="stock-action">
                <img src="img/icon-edit.png" class="icon-btn" onclick="editProduct('${p.name}')">
                <img src="img/icon-delete.png" class="icon-btn" onclick="deleteProduct(this)">
            </td>
        `;

        tableBody.appendChild(tr);
    });
}

function editProduct(name) {
    alert("Edit produk: " + name);
}

function deleteProduct(btn) {
    if (confirm("Yakin hapus produk ini?")) {
        btn.parentElement.parentElement.remove();
    }
}
