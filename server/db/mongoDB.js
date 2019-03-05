const MongoClient = require("mongodb").MongoClient;
const cluster = require("cluster");
const now = require('performance-now')
const sampleData = require("./generation");
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) console.log("error");
  console.log("Database created!");
  const myDb = db.db("massdrop_discussion");
  

    // implementation of cluster here START
    if(cluster.isMaster) {
      var numWorkers = 10//require('os').cpus().length;
    
      console.log('Master cluster setting up ' + numWorkers + ' workers...');
    
      for(var i = 0; i < numWorkers; i++) {
          cluster.fork();
      }
    
      cluster.on('online', function(worker) {
          console.log('Worker ' + worker.process.pid + ' is online');
      });
    
      cluster.on('exit', function(worker, code, signal) {
          console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
          console.log('Starting a new worker');
          cluster.fork();
      });
    } else {
      // var app = require('express')();
      // app.all('/*', function(req, res) {res.send('process ' + process.pid + ' says hello!').end();})
      // var server = app.listen(8000, function() {
      //     console.log('Process ' + process.pid + ' is listening to all incoming requests');
      // });
      let starTime = now()
      // console.log(sampleData)
      let payloadCount = 0
      for(let i = 0; i < 20; i++){
        payloadCount++
        payload(myDb, payloadCount)
      }
      // worker.kill([signal='SIGTERM'])
      console.log(`database seeded: ${now() - starTime}ms`);
      db.close();
    }


  
});


function payload(myDb, payloadCount) {
  const bulk = myDb.collection("threads").initializeUnorderedBulkOp();
  for(let i = 0; i < 50000; i++){
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
  console.log(`Payload: ${payloadCount * 50000}`)

  
}