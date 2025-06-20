// Ambil semua dokumen
print("Semua data:");
db.produk.find().forEach(doc => printjson(doc));

// Ambil satu dokumen
print("Satu data:");
printjson(db.produk.findOne());
