const express = require("express");
const parser = require("body-parser");
const path = require("path");
const app = express();
const cors = require("cors");
// const sqlite3 = require("sqlite3"); //#
// const db = require("./db/index.js"); //SQLITE
var assert = require("assert");
var MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";
var mongodb = require("mongodb");

MongoClient.connect(
  url,
  {
    poolSize: 20,
    useNewUrlParser: true
  },
  function(err, db) {
    assert.equal(null, err);
    mongodb = db;
  }
);

app.use(cors());
app.use(parser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(`${__dirname}/../public`)));

app.get("*.js", function(req, res, next) {
  req.url = req.url + ".gz";
  res.set("Content-Encoding", "gzip");
  next();
});

app.get("/products/:product_id", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/index.html"));
});

// MONGODB
app.get(`/api/products/:product_id/discussions`, (req, res) => {
  const discussions = Number(req.params.product_id);

  let collection = mongodb.db("massdrop_discussion").collection("threads");

  // direct id:1 works, but discussions may be a string instead of a integer throwing err
  // theory was correct, receiving correct product_id's in integer form
  // refactor generation script to handle MAX 15 message threads
  collection
    .findOne({id:discussions},(err, result) => {
      let message_threads = []
      if(err) {console.log(err)}
      else if(result) {
        result.data.forEach((thread)=> {
          message_threads.push(thread)
        })
        res.send(message_threads)
      }
      else {console.log("no documents");}
    });
});

// SQLITE
// app.get(`/api/products/:product_id/discussions`, (req, res) => {
//   const discussions = req.params.product_id;

//   db.all(
//     `SELECT * FROM messages m \
//   INNER JOIN user u on u.id = m.sending_user_id \
//   INNER JOIN product_threads p on p.thread_id = m.thread_id \
//   WHERE p.product_id = "${discussions}" \
//   ORDER BY m.createdAt ASC`,
//     (err, rows) => {
//       if (err) {
//         console.log(err);
//       } else {
//         // console.log(rows);

//         res.send(rows);
//       }
//     }
//   );
// });

app.post("/", function(req, res) {
  res.send("POST request to the homepage");
});

let port = process.env.PORT || 3005;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

// app.get('/users', (req, res) => {
//   // db.all() fetches all results from an SQL query into the 'rows' variable:
//   db.all('SELECT name FROM users_to_pets', (err, rows) => {
//     console.log(rows);
//     const allUsernames = rows.map(e => e.name);
//     console.log(allUsernames);
//     res.send(allUsernames);
//   });
// });

// seed -> indexedDB

// app.get('/products/:product_id/discussions', (req,res) => {
//   db.all('SELECT * FROM messages', (err, rows) => {
//     if (err) {
//       console.log(err)
//     }
//     res.send(rows)
//   })
// })

// module.exports = app;
