const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// mongodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-bookStore:bBawL1WNYdU62vie@cluster0.r0kyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create a collection of documents.
    const bookCollections = client.db("bookinventory").collection("books");

    // insert a books to the db
    app.post('/upload', async(req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    app.get('/getAll', async(req, res) => {
      const books = bookCollections.find();
      const result = await books.toArray();
      res.send(result);
    });

    app.get('/getOne/:id', async(req, res) => {
      const id = req.params.id
      const filter = {_id:new ObjectId(id)}
      const result = await bookCollections.findOne(filter)
      res.send(result);
    })

    app.patch('/update/:id', async(req, res) => {
      const id = req.params.id;
      // console.log(id);
      const updateBookData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert:true};

      const updateDoc = {
        $set: {
          ...updateBookData
        },
      };

      const result = await bookCollections.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // delete
    app.delete('/delete/:id', async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      
      const result = await bookCollections.deleteOne(filter)
      res.send(result);
    });

    // finf by category
    app.get('/getAll', async(req, res) =>{
      let query = {};
      if(req.query?.category){
        query = {category:req.query.category}
      }

      const result = await bookCollections.find(query).toArray();
      res.send(result);
    });



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})