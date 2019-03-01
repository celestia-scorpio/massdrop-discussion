const express = require("express");
const parser = require("body-parser"); //instantiate an express object by calling it.
// const axios = require('axios');
const path = require("path");
const app = express();
const sqlite3 = require("sqlite3");
const db = require("./db/index.js");
const cors = require("cors");
// var request = require('request')

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

app.get("/messages", (req, res) => {
  db.all(`SELECT * FROM messages`, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(rows);

      res.send(rows);
    }
  });
});

app.get(`/api/products/:product_id/discussions`, (req, res) => {
  const discussions = req.params.product_id;

  db.all(
    `SELECT * FROM messages m INNER JOIN user u on u.id = m.sending_user_id INNER JOIN product_threads p on p.thread_id = m.thread_id WHERE p.product_id = "${discussions}" ORDER BY m.createdAt ASC`,
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(rows);

        res.send(rows);
      }
    }
  );
});

app.post("/", function(req, res) {
  res.send("POST request to the homepage");
});

let port = process.env.PORT || 3005;

app.listen(port, function() {
  console.log(`listening on port ${port}`);

  // app.get('/users', (req, res) => {
  //   // db.all() fetches all results from an SQL query into the 'rows' variable:
  //   db.all('SELECT name FROM users_to_pets', (err, rows) => {
  //     console.log(rows);
  //     const allUsernames = rows.map(e => e.name);
  //     console.log(allUsernames);
  //     res.send(allUsernames);
  //   });
  // });
});

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
