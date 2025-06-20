// use toko_online;

// Hapus koleksi jika sudah ada
db.produk.drop();

// Buat koleksi dengan schema validation
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
          minimum: 1000,
          description: "harus int dan >= 1000"
        },
        stok: {
          bsonType: "int",
          minimum: 0
        },
        kategori: {
          enum: ["Elektronik", "Aksesoris", "Pakaian"],
          description: "kategori harus valid"
        }
      }
    }
  }
});

print("Collection dengan validasi schema berhasil dibuat.");
