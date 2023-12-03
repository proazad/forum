const express = require("express");
require("dotenv").config();
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const port = process.env.PORT || 5000;

// midleware
app.use(cors());
app.use(express.json());

// mongoDB connect

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hvlfmu8.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const userCollections = client.db("onlineForum").collection("users");
    const postCollections = client.db("onlineForum").collection("posts");

    // user api
    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const isExitUser = await userCollections.findOne(query);
      if (isExitUser) {
        return res.send({ message: "user already exit", inserted: null });
      }
      res.send(await userCollections.insertOne(user));
    });

    // user get api
    app.get("/users", async (req, res) => {
      res.send(await userCollections.find().toArray());
    });

    //Create New  post Api 
    app.post("/posts", async (req, res) => {
      const post = req.body;
      console.log(post);
      const result = await postCollections.insertOne(post);
      res.send(result);
    })

    //Get All Post API 
    app.get("/posts", async (req, res) => {
      const result = postCollections.find().toArray();
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("online forum running");
});
app.listen(port, () => {
  console.log(`online forum runing on the port: ${port}`);
});
