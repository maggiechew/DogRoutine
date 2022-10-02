const {
  Penny,
  foodContainer,
  bowl,
  kitchenScale,
  sleep,
} = require("./Objects-Source.js");

let array = [goodMorning, hastoPee, dogFoodContainer, dogWaiting];

function gettingReady() {
  for (let i = 0; i < array.length; i++) {
    array[i]();
    sleep(1000);
  }
}

function goodMorning() {
  console.log(
    `Good morning, puppy! It's a beautiful day, and time for your breakfast!`
  );
  console.log(`Penny: WOOF!`);
  console.log(`Let's go down to the kitchen...`);
  sleep(2000);
  console.log(`We're in the kitchen!`);
  Penny.location = "Kitchen";
}

function hastoPee() {
  console.log("Does Penny have to pee?");
  if (Penny.hasToPee) {
    console.log("BING BING... Penny says she has to pee!");
    Penny.location = "Outside";
    console.log(`We let Penny outside \n ...... Waiting for Penny.......`);
    sleep(2000);
    console.log("Letting the dog in!");
    Penny.location = "Kitchen";
    Penny.hasToPee = false;
    console.log("Penny is all done her business");
  } else {
    sleep(2000);
    console.log("Penny doesn't have to pee");
  }
}

function dogFoodContainer() {
  console.log("Is kitchen food container full?");
  if (foodContainer.amount >= Penny.eats) {
    console.log("There is sufficient food in the container");
  } else {
    console.log(`There isn't enough food in the container`);
    console.log(`Bringing the container downstairs...`);
    sleep(1000);
    foodContainer.location = "Basement";
    console.log("Opening the food bag...");
    console.log("Adding food to the food container...");
    console.log("The container is full!");
    foodContainer.amount = 1000;
    console.log("Time to bring it upstairs...");
    foodContainer.location = "Kitchen";
    console.log("Container is good to go!");
  }
}

function dogWaiting() {
  console.log("Is the dog waiting in her spot?");
  if (Penny.location == "Spot") {
    console.log("She is waiting nicely... what a good dog!");
  } else {
    console.log(`She isn't! Silly goose`);
    console.log(`"Penny, spot!"`);
    console.log("Waiting for Penny.......");
    sleep(3000);
    Penny.location = "spot";
    console.log("She's in her spot! Good girl!");
  }
}

module.exports = {
  gettingReady,
};
