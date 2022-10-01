const {
  Penny,
  foodContainer,
  bowl,
  kitchenScale,
  executeAsynchronously,
} = require("./dog_object_status");

async function preparingFoods() {
  await theScale();
  await waterBowl();
  await dogWaiting();
  console.log("Success!");
  return "Part Two Complete";
}

function theScale() {
  console.log("Retrieving dog bowl from stand...");
  return new Promise((resolve) => {
    bowl.food.Location = "onKitchenScale";
    console.log("Placed the bowl on the scale");
    kitchenScale.isOn = true;
    console.log("Turned the scale on");
    kitchenScale.isTared = true;
    console.log("The scale is tared");
    console.log(`Filling Penny's bowl...`);
    setTimeout(() => {
      bowl.food.Amount += Penny.eats;
      foodContainer.Amount -= Penny.eats;
      console.log(`Penny's bowl is full!`);
      console.log(`Returning her bowl to the stand`);
      bowl.food.location = "stand";
      resolve("All done with the scale");
    }, 2000);
  });
}

function waterBowl() {
  console.log("Is her water bowl full?");

  return new Promise((resolve) => {
    if (bowl.water >= 1000) {
      console.log("Water bowl is full, all good!");
      resolve("Water bowl was already full!");
    } else {
      console.log(`The bowl isn't full! Gotta fill 'er up...`);
      bowl.water.location = "sink";
      console.log("Rinsing out the bowl...");
      setTimeout(() => {
        console.log("Filling up the bowl...");
        setTimeout(() => {
          console.log("Returning the bowl to the stand...");
          bowl.water.Amount = 100;
          setTimeout(() => {
            bowl.water.location = "stand";
            console.log("All done with the water!");
            resolve("Water bowl was filled up!");
          }, 2000);
        }, 2000);
      }, 2000);
    }
  });
}

function dogWaiting() {
  console.log("Is the dog waiting in her spot?");
  return new Promise((resolve) => {
    if (Penny.location == "spot") {
      resolve(console.log("She is waiting nicely... what a good dog!"));
    } else {
      console.log(`She isn't! Silly goose`);
      console.log(`"Penny, spot!"`);
      console.log("Waiting for Penny.......");
      setTimeout(() => {
        Penny.location = "spot";
        resolve(console.log("She's in her spot! Good girl!"));
      }, 3000);
    }
  });
}

// // dogWaiting();
// preparingFoods();

  module.exports = {
    preparingFoods
  };
