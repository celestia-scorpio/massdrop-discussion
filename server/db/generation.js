/* API Generation
 * Marc Benedict Latoy Choa
 * 02.27.19
 * 
 * generation script for predefined data points
 * re-assessed and stream-lined tables
 * require first message to be parent true
 * 
 */

const faker = require('faker');

const dataPoints = 50000 //MongoDB Amount
let counter = 0;
let totalCount = 0;

// 
generation = function(initialValue, terminationValue) {
  let full_output = [];

  // product_id iterator
  for(let i = initialValue; i < terminationValue+1; i++){ //clustering generation
    let object_output = {};
    let array_output = [];
    let thread_flag = false;
    // i product_id
    object_output.id = i;
    // want a format of {id: i, data: [{id: i, name: "", createdAt: date}]}
    totalCount += counter;
    for(let j = 1 + totalCount; j < getRandomInt(5,7) + totalCount; j++){  //unique_id iterator
      array_output.push({
        id: i,
        name: faker.commerce.product(),
        createdAt: faker.date.recent(),
        like_count: generateNumber(), //generate random numbers high hundreds
        body: faker.lorem.paragraphs(),
        parent_child: booleanGeneration(thread_flag), //generate 1 & 0's
  
        username: faker.name.firstName(),
        avatar: awsLINKS()
  
      })
      thread_flag = true
      counter++;
    }

    object_output.data = array_output;
    full_output.push(object_output)
  }
  return full_output;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNumber() {
  return getRandomInt(147, 983)
}

function booleanGeneration(flag) {
  if (!flag){
    return 1
  }
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
module.exports = {generation}