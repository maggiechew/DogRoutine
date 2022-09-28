function partTwo() {
  executeAsynchronously([theScale, waterBowl, dogWaiting], 1);
  return "Part Two";
}

function theScale() {
  console.log("Retrieving dog bowl from stand...");
  bowl.food.Location = "onKitchenScale";
  console.log("Placed the bowl on the scale");
  kitchenScale.isOn = true;
  console.log("Turned the scale on");
  kitchenScale.isTared = true;
  console.log("The scale is tared");
  bowl.food.Amount += Penny.eats;
  foodContainer.Amount -= Penny.eats;
  console.log(`Penny's bowl is full!`);
  console.log(`Returning her bowl to the stand`);
  bowl.food.location = "stand";
}

function waterBowl() {
  console.log("Is her water bowl full?");
  if (bowl.water >= 1000) {
    console.log("Water bowl is full, all good!");
    return "Water bowl was already full!";
  } else {
    console.log(`The bowl isn't full! Gotta fill 'er up...`);
    bowl.water.location = "sink";
    console.log("Rinsing out the bowl...");
    console.log("Filling up the bowl...");
    bowl.water.Amount = 100;
    console.log("Returning the bowl to the stand...");
    bowl.water.location = "stand";
    console.log("All done with the water!");
    return "Water bowl was filled up!";
  }
}

function dogWaiting() {
  console.log("Is the dog waiting in her spot?");
  if ((Penny.location = "spot")) {
    console.log("She is waiting nicely... what a good dog!");
  } else {
    console.log(`She isn't! Silly goose`);
    console.log(`"Penny, spot!"`);
    console.log("Waiting for Penny.......");
    Penny.location = "spot";
    console.log("She's in her spot! Good girl!");
  }
}

const {
  Penny,
  foodContainer,
  bowl,
  kitchenScale,
  executeAsynchronously
} = require("./dog_object_status");


module.exports = {
  partTwo
};