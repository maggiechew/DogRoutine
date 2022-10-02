const {
  Penny,
  foodContainer,
  bowl,
  kitchenScale,
  executeAsynchronously
} = require("./dog_object_status");

const { partOne } = require("./PartOne_Functions.js");
const { partTwo } = require("../PartTwo_Functions.js");
const { partThree } = require("../PartThree_Functions.js");


function stringMe (object) {
  return JSON.stringify(object)
}

function status () {
  console.log(`Penny's status is: `,Penny)
  console.log(`The bowls look like: ` + stringMe(bowl))
  console.log(`The food container: ` + stringMe(foodContainer))
}


function doggyFeedingProcess() {
  executeAsynchronously([partOne, partTwo, partThree])
}

// const thenable = new Promise((resolve, reject) => {
//   let x = 2;
  
//   if (x == 2) {
//     console.log('Done')
//     resolve("Part One Success");
//   } else {
//     console.log('No')
//     reject("Error, error Will Robinson")
//   }
// }).then(console.log('Hi!'))
// .catch(console.log('Error'));

// thenable

// const attempt = new Promise((resolve, reject) => {
//   if (partOne = "Part One Complete") {
//     console.log('Done')
//     resolve("Part One Success");
//   } else {
//     reject("Error, error Will Robinson")
//   }
// });



status();
doggyFeedingProcess();
// status();


