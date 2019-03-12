const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) console.log("error");
  console.log("mongodb connected");
  const myDb = db.db("massdrop_discussion");

  // app.get('/api/products/:product_id/discussions', (req,res) => {
  //   const product_ID = req.params.product_id
  //   myDb.collection('threads')
  //   .find({id:`${product_ID}`})
  //   .then((discussion) => {res.send(discussion)})
  //   .catch((error) => {res.send(error)})
  // })

  // db.close()
});
module.exports = connection;
