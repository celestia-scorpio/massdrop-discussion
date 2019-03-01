const MongoClient = require("mongodb").MongoClient;
const sampleData = require("./generation");
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) console.log("error");
  console.log("Database created!");
  const myDb = db.db("massdrop_discussion");

  // const bulk = myDb.collection("threads").initializeUnorderedBulkOp();
  for(let i = 0; i < (sampleData.length * 10) / 100000; i++){
    payload(myDb)
  }

  // sampleData.forEach(data => {
  //   bulk.insert({
  //     id: data.id,
  //     name: data.name,
  //     createdAt: data.createdAt,
  //     like_count: data.like_count,
  //     body: data.body,
  //     parent_child: data.parent_child,
  //     username: data.username,
  //     avatar: data.avatar
  //   });
  // });
  // bulk.execute();

  db.close();
});


function payload(myDb) {
  const bulk = myDb.collection("threads").initializeUnorderedBulkOp();

  for(let i = 0; i < 100000; i++){
    let data = sampleData[i]
    bulk.insert({
      id: data.id,
      name: data.name,
      createdAt: data.createdAt,
      like_count: data.like_count,
      body: data.body,
      parent_child: data.parent_child,
      username: data.username,
      avatar: data.avatar
    })
  }
  bulk.execute();
  console.log('batch complete')
}