// MongoDB data insertion w/ generation.js script

const MongoClient = require("mongodb").MongoClient;
const cluster = require("cluster");
const now = require("performance-now");
const { generation } = require("./generation");
var url = "mongodb://localhost:27017/";

// console.log(generation(2,5))

MongoClient.connect(url, {poolSize: 10, useNewUrlParser: true}, function(err, db) {
  if (err) console.log("error");
  // console.log("mongodb database connected");
  const myDb = db.db("massdrop_discussion");
  
  var numWorkers = 10; //require('os').cpus().length;
  // implementation of cluster here START
  if (cluster.isMaster) {
    console.log("Master cluster setting up " + numWorkers + " workers...");

    for (let i = 1; i <= numWorkers; i++) {
      cluster.fork({ worker: `wrk${i}` });
    }

    cluster.on("online", function(worker) {
      console.log("Worker " + worker.process.pid + " is online");
    });

    cluster.on("exit", function(worker, code, signal) {
      console.log(
        "Worker " +
          worker.process.pid +
          " died with code: " +
          code +
          ", and signal: " +
          signal
      );
      // console.log('Starting a new worker');
      // cluster.fork();
    });
  }
  // DEFAULT DIRECTIVE
  // else {
  //   let starTime = now()
  //   // console.log(sampleData)
  //   let payloadCount = 0
  //   for(let i = 0; i < 20; i++){
  //     payloadCount++
  //     payload(myDb, payloadCount)
  //   }
  //   // worker.kill([signal='SIGTERM'])
  //   console.log(`database seeded: ${now() - starTime}ms`);
  //   db.close();
  // }




    // iterator to change the start & end points
    // initial | endpoint
    // 1          50,000
    // 50,001  |  100,000
    // 100,001 |  150,000
    // 150,001 |  200,000
    // 200,001 |  250,000

    // NOTES: running this 20 times w/ different initial & endpoints
    // let initialCount = 0     //[0-9] [10-19] [20-29] ... [190 - 199]
    // let endpointCount = 1    //[1-10] [11-20] [21-30] ... [191 - 200]
    // payload()
    // initialCount++
    // endpointCount++

    // formula
    // 1 + (initialCount * 50,000) | endpointCount * 50,000
    // 1 + (0 * 50,000) =       1  | 1 * 50,000 =  50,000
    // 1 + (1 * 50,000) =  50,001  | 2 * 50,000 = 100,000
    // 1 + (2 * 50,000) = 100,001  | 3 * 50,000 = 150,000
    // ...
    // 1 + (9 * 50,000) = 450,001  | 10* 50,000 = 500,000


    let batch_size = 50000;
    let initialCount = 190; //0. 10. 20. 30. 40. 50. 60. ... 190.
    let endpointCount = 191; //1. 11. 21. 31. 41. 51. 61. ... 191.
    console.log('initial count: ',initialCount)
    // metrics
    let initial_run = now()/1000

    for(let i = 1; i <= numWorkers; i++){
      if(process.env.worker === `wrk${i}`){
        APIdocument = generation((1 + (initialCount * batch_size)),(endpointCount * batch_size))
        payload(myDb)
        // db.close()
        console.log(`batch ${i} time: ${(now()/1000) - initial_run}`)
        console.log((1 + initialCount * batch_size),(endpointCount*batch_size))
      }
      initialCount++;
      endpointCount++
    }


  // if (process.env.worker == "wrk1") {
  //   // NOTES:
  //   // batch size of 50K, run 10 workers 20 times
  //   // change initialCount & endpointCount
  //   APIdocument = generation(1,50000)
  //   payload(myDb)
  //   db.close()
  //   // process.exit();
  // }
  // if (process.env.worker == "wrk2") {
  //   APIdocument = generation(50001,100000)
  //   payload(myDb)
  //   db.close()
  //   // process.exit();
  // }


});


function payload(myDb) {
  const bulk = myDb.collection("threads").initializeOrderedBulkOp();
  for (let i = 0; i < APIdocument.length; i++) { //iterate through product_id's
    let product_id = APIdocument[i];
    let data_length = APIdocument[i].data.length
    let data_contents = APIdocument[i].data //require to iterator

      bulk.insert({
        id: product_id.id,
        data: thread_insertion(data_length,data_contents)
        // [
        //   // multiple data points
        //   {
        //     name: thread_data.name,
        //     createdAt: thread_data.createdAt,
        //     like_count: thread_data.like_count,
        //     body: thread_data.body,
        //     parent_child: thread_data.parent_child,
        //     username: thread_data.username,
        //     avatar: thread_data.avatar
        //   }
        // ]
      });

      // console.log(object_data.name);

  }
  bulk.execute();
}

// create the array of objects of the data to be inserted
function thread_insertion(data_length, data_info){
  let output = []
  for (let j = 0; j < data_length; j++){
    let thread_data = data_info[j]
    
    output.push({
      name: thread_data.name,
      createdAt: thread_data.createdAt,
      like_count: thread_data.like_count,
      body: thread_data.body,
      parent_child: thread_data.parent_child,
      username: thread_data.username,
      avatar: thread_data.avatar
    })
  }

  return output;
}