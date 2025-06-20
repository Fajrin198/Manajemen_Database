

db.produk.bulkWrite([
  {
    insertOne: {
      document: { nama: "Headset Razer", harga: 1500000, stok: 5, kategori: "Aksesoris" }
    }
  },
  {
    updateOne: {
      filter: { nama: "Laptop ASUS" },
      update: { $inc: { stok: 5 } }
    }
  },
  {
    deleteOne: {
      filter: { nama: "Keyboard Mechanical" }
    }
  }
]);

print("Bulk write selesai.");
