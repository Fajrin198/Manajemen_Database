// Produk dengan harga lebih dari 500 ribu
const hasil = db.produk.find({ harga: { $gt: 500000 } });
hasil.forEach(doc => printjson(doc));