/* API Generation
 * Marc Benedict Latoy Choa
 * 02.27.19
 * 
 * generation script for predefined data points
 * re-assessed and stream-lined tables
 * 
 * 
 */

const faker = require('faker');

const dataPoints = 50000 //MongoDB Amount

let generation = function() {
  let output = [];
  for(let i = 1; i < dataPoints+1; i++){
    output.push({
      id: i,
      name: faker.commerce.product(),
      createdAt: faker.date.recent(),
      like_count: generateNumber(), //generate random numbers high hundreds
      body: faker.lorem.paragraphs(),
      parent_child: booleanGeneration(), //generate 1 & 0's

      username: faker.name.firstName(),
      avatar: awsLINKS()

    })
  }

  return output;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNumber() {
  return getRandomInt(147, 983)
}

function booleanGeneration() {
  return getRandomInt(0,1)
}

function awsLINKS(){
  let aws = [
    "https://s3.amazonaws.com/uifaces/faces/twitter/teeragit/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/bobwassermann/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/dudestein/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/xtopherpaul/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/aka_james/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/jennyshen/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/orkuncaylar/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/wearesavas/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/jimmuirhead/128.jpg"
  ];

  return aws[getRandomInt(0,9)]
}

// console.log(generation())
module.exports = generation();