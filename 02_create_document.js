

db.produk.insertOne({
  nama: "Laptop ASUS",
  harga: 8500000,
  stok: 15,
  kategori: "Elektronik"
});

db.produk.insertMany([
  { nama: "Mouse Logitech", harga: 250000, stok: 50, kategori: "Aksesoris" },
  { nama: "Keyboard Mechanical", harga: 750000, stok: 30, kategori: "Aksesoris" }
]);

print("Dokumen berhasil ditambahkan.");
