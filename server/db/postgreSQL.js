const { Pool, Client } = require('pg');
// const dotenv = require('dotenv');

const client = new Client({
  user: 'mbchoa',
  host: 'localhost',
  database: 'massdropdiscussions',
  password: '1234',
  port: '5432'
})
insertion();


// const createTables = () => {
//   const productTable = `CREATE TABLE IF NOT EXISTS
//       product(
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(50) NOT NULL,

//         student_name VARCHAR(128) NOT NULL,
//         student_age INT NOT NULL,
//         student_class VARCHAR(128) NOT NULL,
//         parent_contact VARCHAR(128) NOT NULL,
//         admission_date VARCHAR(128) NOT NULL
//       )`;
//   const messageTable = `CREATE TABLE IF NOT EXITS
//       message(
//         id SERIAL PRIMARY KEY,
//         body_message TEXT NOT NULL,
//         like_count INTEGER NOT NULL,
//         creationDate DATE NOT NULL,
//         parent_child INTEGER NOT NULL
//       )`;
//   const user = `CREATE TABLE IF NOT EXITS
//       user(
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(100) NOT NULL,
//         avatar_link VARCHAR(500) NOT NULL
//       )`
  
//   client.query(productTable)
//     .then((res) => {
//       console.log(res);
//       pool.end();
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     });
// };


async function insertion(){
  try {
    await client.connect()
    await client.query('BEGIN')
    await client.query('INSERT INTO reviews VALUES ($1,$2)', [1000, 'Ali'])
    console.log('we inserted')
    
    await client.query('COMMIT')
  }
  catch(err){
    console.log(`Failed: ${err}`)
  }
}

// const initialize = (async function() {
//   await client.connect()
//   pg.query()



//   console.log("db connection");
//   await client.end()
// })()
