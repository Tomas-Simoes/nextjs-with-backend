const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const mongoURI =
  "mongodb+srv://simoes:simoes12345@cluster0.qksi9tv.mongodb.net/?retryWrites=true&w=majoritymongodb+srv://simoes:<password>@cluster0.qksi9tv.mongodb.net/?retryWrites=true&w=majority";

async function connectMongo() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

connectMongo();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-PINGOTHER, Content-Type, Authorization"
  );
  app.use(cors());
  next();
});

app.get("/", async (req, res) => {
  return res.json({ response: "This is the response from port 8080" });
});

/*
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
*/

app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
