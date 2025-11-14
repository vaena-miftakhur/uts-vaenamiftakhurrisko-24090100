# UTS Pemrograman Web – Sistem Dashboard & Product Management

## 👤 Identitas
- **Nama:** Vaena Miftakhurrisko  
- **NIM:** 24090100  

---

## 🔗 Link Penting
- **GitHub Repository:** https://github.com/USERNAME/NAMA-REPO  
- **GitHub Pages:** https://USERNAME.github.io/NAMA-REPO/  

> *Silakan ganti USERNAME dan NAMA-REPO sesuai repository kamu.*

---

## 📘 Deskripsi Project
Project ini adalah website sederhana untuk UTS Pemrograman Web yang terdiri dari **halaman login**, **dashboard**, dan **daftar produk**.  
Seluruh tampilan disesuaikan dengan desain Figma yang telah diberikan.

Website dibuat dengan **HTML + CSS + JavaScript**, tanpa framework agar mudah dipahami.

---

## 🗂️ Fungsi Tiap Halaman

### **1️⃣ Login Page (index.html / login.html)**
- User dapat login menggunakan **email & password yang sudah ditentukan**:
  - **Email:** `vaenamiftakhurrisko@gmail.com`
  - **Password:** `24090100`
- Validasi login ditangani dengan JavaScript.
- Terdapat tombol login Google & Facebook (tidak terhubung, hanya tampilan).
- UI responsif dan mengikuti desain Figma.

---

### **2️⃣ Dashboard Page (dashboard.html)**
- Menampilkan ringkasan data:
  - Total Products
  - Total Sales
  - Total Revenue
- Data ditampilkan menggunakan JavaScript (dummy data).
- Terdapat tombol *View Products* menuju halaman product.
- Sidebar icon dibuat vertikal seperti Figma.
- Tampilan responsif untuk mobile.

---

### **3️⃣ Product List Page (products.html)**
- Menampilkan tabel daftar produk.
- Kolom *Stock* digabung dengan tombol aksi:
  - **Edit** → menampilkan alert ID produk.
  - **Delete** → menghapus baris produk.
- Data produk diambil dari array object di script.js.
- Tabel responsif dan tetap rapi ketika layar kecil.

---

## 🛠️ Teknologi yang Digunakan
- **HTML5**
- **CSS3 (Responsive)**
- **JavaScript**
- **GitHub Pages**

---

## 📂 Struktur Folder
project-folder/
│── index.html
│── dashboard.html
│── products.html
│── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── img/
    ├── icon-home.png / jpg
    ├── icon-box.png / jpg
    ├── icon-sales.png / jpg
    ├── icon-revenue.png
    ├── icon-settings.png
    ├── icon-edit.png
    ├── icon-delete.png
    ├── google.png
    └── facebook.png
