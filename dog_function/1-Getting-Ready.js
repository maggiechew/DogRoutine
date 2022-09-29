const {
  Penny,
  foodContainer,
  bowl,
  kitchenScale,
  executeAsynchronously,
} = require("./dog_object_status");

async function gettingReady() {
  await goodMorning();
  await hastoPee();
  await dogFoodContainer();
  await dogWaiting();

  return "Part One Complete";
}

function goodMorning() {
  console.log(
    `Good morning, puppy! It's a beautiful day, and time for your breakfast!`
  );
  console.log(`Penny: WOOF!`);
  console.log(`Let's go down to the Kitchen...`);
  setTimeout(() => {
    Penny.location = "Kitchen";
    return "Good morning completed!";
  }, 3000);
}

function hastoPee() {
  console.log("Does Penny have to pee?");
  return new Promise((resolve) => {
    if (Penny.hasToPee) {
      console.log("BING BING... Penny says she has to pee!");
      Penny.location = "Outside";
      console.log(`We let Penny outside \n ...... Waiting for Penny.......`);
      setTimeout(() => {
        console.log("Letting the dog in!");
        Penny.location = "Kitchen";
        Penny.hasToPee = false;
        resolve(console.log("Penny is all done her business"));
      }, 2000);
    } else {
      setTimeout(() => {
        resolve(console.log("Penny doesn't have to pee"));
      }, 2000);
    }
  });
}

function dogFoodContainer() {
  console.log("Is kitchen food container full?");
  return new Promise((resolve) => {
    if (foodContainer.Amount >= Penny.eats) {
      resolve(console.log("There is sufficient food in the container"));
    } else {
      console.log(`There isn't enough food in the container`);
      console.log(`Bringing the container downstairs...`);

      setTimeout(() => {
        foodContainer.location = "Basement";
        console.log("Opening the food bag...");
        console.log("Adding food to the food container...");
        setTimeout(() => {
          console.log("The container is full!");
          foodContainer.Amount = 1000;
          console.log("Time to bring it upstairs...");
          setTimeout(() => {
            foodContainer.location = "Kitchen";
            resolve(console.log("Container is good to go!"));
          }, 1000);
        }, 1000);
      }, 1000);
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

//   function dogWaiting() {
//     console.log("Is the dog waiting in her spot?");
//     if ((Penny.location = "spot")) {
//       console.log("She is waiting nicely... what a good dog!");
//     } else {
//       console.log(`She isn't! Silly goose`);
//       console.log(`"Penny, spot!"`);
//       console.log("Waiting for Penny.......");
//       Penny.location = "spot";
//         console.log("She's in her spot! Good girl!");
//   }}

//   module.exports = {
//     partOne
//   };

// dogWaiting();
gettingReady();
