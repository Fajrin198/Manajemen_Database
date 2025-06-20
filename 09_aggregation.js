// use toko_online;

// Aggregasi rata-rata harga per kategori
const hasil = db.produk.aggregate([
  {
    $group: {
      _id: "$kategori",
      rataHarga: { $avg: "$harga" },
      totalProduk: { $sum: 1 }
    }
  }
]);

hasil.forEach(doc => printjson(doc));
