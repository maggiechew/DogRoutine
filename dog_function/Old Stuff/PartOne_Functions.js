function partOne() {
  executeAsynchronously(
    [goodMorning, hastoPee, dogFoodContainer, dogWaiting],
    1
  );
  return "Part One Complete";
}



function goodMorning() {
  console.log(
    `Good morning, puppy! It's a beautiful day, and time for your breakfast!`
  );
  console.log(`Penny: WOOF!`);
  console.log(`Let's go down to the Kitchen...`);
  Penny.location = "Kitchen";
    return "Good morning completed!";
}

function hastoPee() {
  console.log("Does Penny have to pee?");
  if (Penny.hasToPee == false) {
    console.log("Penny doesn't have to pee");
    return `Penny didn't have to pee!`;
  } else {
    console.log("BING BING... Penny says she has to pee!");
    Penny.location = "Outside";
    console.log(`We let Penny outside \n ...... Waiting for Penny.......`);
    console.log("Letting the dog in!");
    Penny.location = "Kitchen";
    Penny.hasToPee = false;
    console.log("Penny is all done her business");
    return "Penny finished her business!";
  }
}

function dogFoodContainer() {
  console.log("Is kitchen food container full?");
  if (foodContainer.Amount >= 160) {
    console.log("There is sufficient food in the container");
  } else {
    console.log(`There isn't enough food in the container`);
    console.log(`Bringing the container downstairs...`);
    foodContainer.location = "Basement";
    console.log("Opening the food bag...");
    console.log("Adding food to the food container...");
    console.log("The container is full!");
    foodContainer.Amount = 1000;
    console.log("Time to bring it upstairs...");
    foodContainer.location = "Kitchen";
    console.log("Container is good to go!");
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
}}

const {
  Penny,
  foodContainer,
  bowl,
  kitchenScale,
  executeAsynchronously
} = require("./dog_object_status");


module.exports = {
  partOne
};

