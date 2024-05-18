const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1/shop_db")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

const products = [
  {
    name: "Kemeja Flanel",
    brand: "Hollister",
    price: 750000,
    color: "biru muda",
    size: "S",
  },
  {
    name: "Celana Chino",
    brand: "Levi's",
    price: 900000,
    color: "krem",
    size: "M",
  },
  {
    name: "Sweater",
    brand: "Gap",
    price: 650000,
    color: "merah muda",
    size: "XL",
  },
  {
    name: "Sepatu Sneakers",
    brand: "Nike",
    price: 1200000,
    color: "putih",
    size: "S",
  },
  {
    name: "Tas Ransel",
    brand: "Herschel",
    price: 1500000,
    color: "biru",
    size: "L",
  },
  {
    name: "Kacamata Aviator",
    brand: "Ray-Ban",
    price: 2000000,
    color: "emas",
    size: "XL",
  },
  {
    name: "Baju Renang",
    brand: "Speedo",
    price: 500000,
    color: "biru tua",
    size: "M",
  },
  {
    name: "Topi Baseball",
    brand: "New Era",
    price: 350000,
    color: "hitam",
    size: "L",
  },
  {
    name: "Rompi",
    brand: "Zara",
    price: 850000,
    color: "abu-abu",
    size: "XL",
  },
  {
    name: "Jas",
    brand: "Hugo Boss",
    price: 4500000,
    color: "hitam",
    size: "M",
  },
];

Product.insertMany(products)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
