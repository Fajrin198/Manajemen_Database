
// use toko_online;
db.createCollection("produk");
print("[1] Database dan collection 'produk' dibuat");

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

print("[2] Dokumen berhasil ditambahkan");


print("[3] Semua Produk:");
db.produk.find().forEach(doc => printjson(doc));

print("[3] Satu Produk:");
printjson(db.produk.findOne());


db.produk.updateOne(
  { nama: "Laptop ASUS" },
  { $set: { harga: 8000000, stok: 10 } }
);

print("[4] Produk berhasil diupdate");

db.produk.deleteOne({ nama: "Mouse Logitech" });
db.produk.deleteMany({ kategori: "Aksesoris" });

print("[5] Dokumen berhasil dihapus");

print("[6] Produk dengan harga > 500000:");
const comparison = db.produk.find({ harga: { $gt: 500000 } });
comparison.forEach(doc => printjson(doc));


print("[7] Produk Elektronik ATAU stok > 20:");
const logical = db.produk.find({
  $or: [
    { kategori: "Elektronik" },
    { stok: { $gt: 20 } }
  ]
});
logical.forEach(doc => printjson(doc));


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

print("[8] Bulk write berhasil");



print("[9] Rata-rata harga per kategori:");
const aggregasi = db.produk.aggregate([
  {
    $group: {
      _id: "$kategori",
      rataHarga: { $avg: "$harga" },
      totalProduk: { $sum: 1 }
    }
  }
]);
aggregasi.forEach(doc => printjson(doc));

db.produk.drop(); 

db.createCollection("produk", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "harga", "stok", "kategori"],
      properties: {
        nama: {
          bsonType: "string",
          description: "harus berupa string"
        },
        harga: {
          bsonType: "int",
          minimum: 1000
        },
        stok: {
          bsonType: "int",
          minimum: 0
        },
        kategori: {
          enum: ["Elektronik", "Aksesoris", "Pakaian"]
        }
      }
    }
  }
});

print("[10] Schema validation diterapkan pada koleksi 'produk'");
