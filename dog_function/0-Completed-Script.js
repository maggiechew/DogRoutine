const {
  Penny,
  foodContainer,
  bowl,
  kitchenScale,
  sleep,
} = require("./Old Stuff/dog_object_status");

const { gettingReady } = require("./1-Getting-Ready.js");
const { preparingFoods } = require("./2-Preparing-Food.js");
const { dogConsumes } = require("./3-Dog-Consumes-Food.js");

function status() {
  console.log("Status:");
  console.log(`Penny's status is: `, Penny);
  console.log(`The bowls look like: `, bowl);
  console.log(`The food container: `, foodContainer);
}
let array = [status, gettingReady, preparingFoods, dogConsumes, status];

function doggyFeedingProcess() {
  for (let i = 0; i < array.length; i++) {
    array[i]();
    sleep(1000);
  }
}

doggyFeedingProcess();