// Produk dengan kategori "Elektronik" atau stok > 20
const hasil = db.produk.find({
  $or: [
    { kategori: "Elektronik" },
    { stok: { $gt: 20 } }
  ]
});
hasil.forEach(doc => printjson(doc));