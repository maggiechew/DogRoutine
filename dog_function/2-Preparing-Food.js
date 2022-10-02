const {
  Penny,
  foodContainer,
  bowl,
  kitchenScale,
  sleep,
} = require("./Objects-Source.js");

let array = [theScale, waterBowl, dogWaiting];

function preparingFoods() {
  for (let i = 0; i < array.length; i++) {
    array[i]();
    sleep(1000);
  }
}

function theScale() {
  console.log("Retrieving dog bowl from stand...");
  sleep(500);
  bowl.food.location = "onKitchenScale";
  console.log("Placed the bowl on the scale");
  kitchenScale.isOn = true;
  console.log("Turned the scale on");
  kitchenScale.isTared = true;
  console.log("The scale is tared");
  console.log(`Filling Penny's bowl...`);
  sleep(2000);
  bowl.food.amount += Penny.eats;
  foodContainer.amount -= Penny.eats;
  console.log(`Penny's bowl is full!`);
  console.log(`Returning her bowl to the stand`);
  bowl.food.location = "Stand";
}

function waterBowl() {
  console.log("Is her water bowl full?");
  if (bowl.water >= 1000) {
    console.log("Water bowl is full, all good!");
  } else {
    console.log(`The bowl isn't full! Gotta fill 'er up...`);
    bowl.water.location = "Sink";
    console.log("Rinsing out the bowl...");
    sleep(2000);
    console.log("Filling up the bowl...");
    sleep(2000);
    console.log("Returning the bowl to the stand...");
    bowl.water.amount = 100;
    sleep(2000);
    bowl.water.location = "Stand";
    console.log("All done with the water!");
  }
}

function dogWaiting() {
  console.log("Is the dog waiting in her spot?");
  if (Penny.location == "spot") {
    console.log("She is waiting nicely... what a good dog!");
  } else {
    console.log(`She isn't! Silly goose`);
    console.log(`"Penny, spot!"`);
    console.log("Waiting for Penny.......");
    sleep(2500);
    Penny.location = "spot";
    console.log("She's in her spot! Good girl!");
  }
}

module.exports = {
  preparingFoods,
};
