const {
  Penny,
  foodContainer,
  bowl,
  kitchenScale,
} = require("./dog_object_status");

function pennyEating() {
  if ((Penny.stomach.hungry = true)) {
    console.log(`Penny: CRONCH CRONCH CRONCH \n ..... and then......`);
    bowl.food.Amount = 0;
    Penny.stomach.hungry = false;
    setTimeout(() => {
      console.log("All done your breakfast!");
    }, 5000);
  } else {
    setTimeout(() => {
      console.log("Not hungry? Okay, Penny.... your call!");
    }, 2000);
  }
  return "Penny ate!";
}

function pennyDrinking() {
  if ((Penny.stomach.thirsty = true)) {
    console.log(`Penny: SLURP SLURP SLURP! \n ..... and then...... `);
    bowl.water.Amount = 0;
    Penny.stomach.thirsty = false;
    setTimeout(() => {
      console.log("Boy Penny, you sure were thirsty!");
    }, 5000);
  } else {
    setTimeout(() => {
      console.log("Not thirsty? Okay!");
    }, 2000);
  }
  return "Penny drank!";
}


function partThree() {
  console.log("Okay, Penny! Go eat!");
  executeAsynchronously([pennyEating(), pennyDrinking()], 10);
  console.log("All done!");
  return 'Part Three'
}

function executeAsynchronously(functions, timeout) {
  for (var i = 0; i < functions.length; i++) {
    setTimeout(functions[i], timeout);
  }
}

partOne();

module.exports = {
  partOne,
  partTwo,
  partThree,
};

// waterBowl();
