const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const mongoURI =
  "mongodb+srv://simoes:simoes12345@cluster0.qksi9tv.mongodb.net/noteApp?retryWrites=true&w=majority";

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

//? MONGO
async function connectMongo() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

connectMongo();

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

//? ROUTES
app.get("/", async (req, res) => {
  return res.json({ response: "This is the response from backend" });
});

app.get("/add", async (req, res) => {
  var noteCount = await Note.find({}).then((result) => {
    return result.length;
  });

  const newNote = new Note({
    content: "This is note number " + (noteCount + 1),
    important: true,
  });

  newNote.save().then((result) => {
    return res.json({ response: "Note saved successfully!" });
  });
});

app.get("/dbcount", async (req, res) => {
  connectMongo();

  Note.find({}).then((result) => {
    return res.json({ count: result.length });
  });
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
