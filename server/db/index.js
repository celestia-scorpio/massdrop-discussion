var sqlite3 = require('sqlite3').verbose();
// var faker = require('faker');

var db = new sqlite3.Database('massdrop.db', (err)=>{
    if (err){
        console.error(err.message);
    }
    console.log('Connected to the massdrop database.')
})

db.serialize(() => {
    db.each('SELECT * FROM user', (err,row) => {
        if(err){
            console.log(err)
        }
        return(row)
    })
})

db.serialize(() => {
    db.each('SELECT * FROM product', (err,row) => {
        if(err){
            console.log(err)
        }
        return(row)
    })
})

db.serialize(() => {
    db.each('SELECT * FROM messages', (err,row) => {
        if(err){
            console.log(err)
        }
        return(row)
    })
})

db.serialize(() => {
    db.each('SELECT * FROM product_threads', (err,row) => {
        if(err){
            console.log(err)
        }
        return(row)
    })
})


db.serialize(() => {
    db.each('SELECT * FROM thread', (err,row) => {
        if(err){
            console.log(err)
        }
        return(row)
    })
})



// db.serialize(function () {
//     var product = db.prepare("INSERT INTO product VALUES (?,?)");
//     product.run(1, "nike sneaker")
//     product.finalize()
// })

// db.serialize(function () {
//     var user = db.prepare("INSERT INTO user VALUES (?,?,?)");
//     for (var i = 0; i < 10; i++) {
//         user.run((Math.floor(Math.random(i) * 10)), faker.internet.userName(), faker.image.avatar())
//     }
//     user.finalize(
//     );
// })

// db.serialize(function () {
//     var thread = db.prepare("INSERT INTO thread VALUES(?,?)");
//     for (var i = 0; i < 3; i++) {
//         thread.run((Math.floor(Math.random(i) * 10)), faker.lorem.word())
//     }
//     thread.finalize();
// })


// db.serialize(function () {
//     //     // var users = db.prepare("SELECT id FROM user")
//     //     // var threads = db.each("SELECT id FROM thread", (err, row) => { console.log(row)});
//     var messages = db.prepare("INSERT INTO messages VALUES(?,?,?,?,?,?,?)");
//     function threadsf() {

//         var thread = [932, 334, 892]
//         var rand = thread[Math.floor(Math.random() * thread.length)];
//         // console.log(rand, "what is happening")
//         return rand
//     }

//     function usersf() {
//         // var users = db.each("SELECT id FROM user", (err, row) => { console.log(row) })
//         var users = [1,2,3,4,5,6,7,8,9,10]
//         var rand = users[Math.floor(Math.random() * users.length)];
//         return rand
//     }


//     for (var i = 0; i < 100; i++) {
//         messages.run(
//             (Math.floor(Math.random(i) * 100)),
//             (1),
//             (threadsf()),
//             (faker.date.past()),
//             (faker.lorem.paragraph()),
//             (usersf()),
//             (0))
//     }
//     messages.finalize();
// })

// db.serialize(function () {
//     var product_id = [1]
//     var thread = [932, 334, 892]
//     var rand = thread[Math.floor(Math.random() * thread.length)]

//     var product_thread = db.prepare("INSERT INTO product_threads VALUES (?,?,?)");

//     for (var i = 0; i < thread.length; i++) {
//         product_thread.run((Math.floor(Math.random(i) * 100)), product_id[0], rand)
//     }
//     product_thread.finalize();
// })




// db.serialize(function () {
//     var thread = [932, 334, 892]
//     var randThread = thread[Math.floor(Math.random() * thread.length)]
//     var users = [1,2,3,4,5,6,7,8,9,10]
//     var randUsers = users[Math.floor(Math.random() * users.length)]


//     var thread_discussion_participants = db.prepare("INSERT INTO thread_discussion_participants VALUES (?,?,?)");

//     for (var i = 0; i < users.length; i++) {
//         thread_discussion_participants.run((Math.floor(Math.random(i) * 100)), randThread, randUsers)
//     }
//     thread_discussion_participants.finalize();
// })


// db.close((err) => {
//     if (err) {
//         console.log(err, 'something is wrong closing')
//     }
//     console.log('Close the database connection.');
// });

module.exports = db