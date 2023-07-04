const express = require("express");
const cors = require("cors");
const redis = require("redis");
const mongoose = require("mongoose");
const debug = require("redis/lib/debug");
const app = express();

const PORT = 3000;
const REDIS_PORT = 6379;

const client = redis.createClient({ url: "redis://redis:6379" });
client.on("error", (err) => console.log("Redis server error:  " + err));

const mongoURI =
  "mongodb+srv://simoes:simoes12345@cluster0.qksi9tv.mongodb.net/noteTestDatabase?retryWrites=true&w=majority";

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
app.get("/prod/Health", async (req, res) => {
  return res.json({ response: "Express server is healthy." });
});

app.get("/add", async (req, res) => {
  var noteCount = await Note.find({}).then((result) => {
    return result.length;
  });

  const newNote = new Note({
    content: "This is note number " + (noteCount + 1),
    important: true,
  });

  client.set(noteCount + 1, "This is note number " + noteCount + 1);

  newNote.save().then((result) => {
    return res.json({
      response: "Note " + (noteCount + 1) + " saved successfully!",
    });
  });
});

app.get("/dbcount", async (req, res) => {
  connectMongo();

  Note.find({}).then((result) => {
    return res.json({ count: result.length });
  });
});

app.get("/redis/:noteNumber", (req, res) => {
  try {
    const noteNumber = req.params.noteNumber;

    console.log("Trying to get from cache note " + noteNumber);

    client.get(noteNumber, async (err, cache_data) => {
      if (cache_data) {
        return res.json({
          message: `Retrieved note number ${cache_data} from the cache`,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
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

app.listen(PORT, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
