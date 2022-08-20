/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion } = require('mongodb');
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

// jwt auth

//  jwt verification
function verifyJWT(req, res, next) {
   const authHeader = req.headers.authorization;
   if (!authHeader) {
      return res.status(401).send({ message: 'unauthorized access' });
   }
   const token = authHeader.split(' ')[1];
   jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
      if (err) {
         return res.status(403).send({ message: 'can not go further!!😕 forbidden access' });
      }

      req.decoded = decoded;
      next();
   });
}

const run = async () => {
   try {
      await client.connect();
      console.log('Connected to MongoDB');

      const UsersCollection = client.db('image-analytics').collection('users');
      const ConvertsCollection = client.db('image-analytics').collection('converts');

      // Create or update user
      app.put('/users/:email', async (req, res) => {
         const user = req.body;
         const email = req.params.email;
         const filter = { email: email };
         const options = { upsert: true };
         const updateDoc = {
            $set: user,
         };
         const result = await UsersCollection.updateOne(filter, updateDoc, options);
         const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN, {
            expiresIn: '30d',
         });
         res.send({ result, accessToken });
      });

      app.put('/converts/:email', verifyJWT, (req, res) => {
         const email = req.params.email;
         const filter = { email: email };
         const options = { upsert: true };
         const updateDoc = {
            $set: {
               convert: req.body.converts.value,
            },
         };

         const result = ConvertsCollection.updateOne(filter, updateDoc, options);
         console.log(result);

         res.send({ result });
      });

      app.get('/converts/:email', verifyJWT, async (req, res) => {
         const email = req.params.email;
         const result = await ConvertsCollection.findOne({ email: email });
         console.log(result);
         res.send({ result });
      });
   } catch (err) {
      console.error(err);
      // eslint-disable-next-line no-empty
   } finally {
   }
};

run().catch(console.dir);

// initailize setup

app.get('/', async (_req, res) => {
   res.send('hello world');
});
app.listen(port, async () => {
   console.log(`Server is running in ${port}`);
});
