/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongo db setup

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   serverApi: ServerApiVersion.v1,
});

const run = async () => {
   try {
      await client.connect();
      console.log('Connected to MongoDB');
   } catch (err) {
      console.error(err);
      // eslint-disable-next-line no-empty
   } finally {
   }
};

run().catch(console.dir);

// initailize setup

app.get('/', async (req, res) => {
   res.send('hello world');
});
app.listen(port, async (req, res) => {
   console.log(`Server is running in ${port}`);
});
