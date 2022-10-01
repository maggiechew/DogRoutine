const {
  Penny,
  foodContainer,
  bowl,
  kitchenScale,
} = require("./dog_object_status");

const { gettingReady } = require("./1-Getting-Ready.js");
const { preparingFoods } = require("./2-Preparing-Food.js");
const { dogConsumes } = require("./3-Dog-Consumes-Food.js");

function status() {
  console.log("Status:");
  new promise((resolve) => {
    console.log(`Penny's status is: `, Penny);
    console.log(`The bowls look like: `, bowl);
    console.log(`The food container: `, foodContainer);
    resolve("all done");
  });
}

async function doggyFeedingProcess() {
  // await status();
  await gettingReady();
  await preparingFoods();
  await dogConsumes();
  // await status();
}

doggyFeedingProcess();

