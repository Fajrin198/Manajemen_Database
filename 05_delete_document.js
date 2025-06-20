// Hapus satu dokumen
db.produk.deleteOne({ nama: "Mouse Logitech" });

// Hapus semua dokumen kategori "Aksesoris"
db.produk.deleteMany({ kategori: "Aksesoris" });

print("Dokumen berhasil dihapus.");
