
// Update satu dokumen
db.produk.updateOne(
  { nama: "Laptop ASUS" },
  { $set: { harga: 8000000, stok: 10 } }
);

print("Dokumen berhasil diupdate.");
