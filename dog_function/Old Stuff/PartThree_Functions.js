function partThree() {
  executeAsynchronously([pennyEating, pennyDrinking, allDone], 1);
  return "Part Three";
}


  

function pennyEating() {
    console.log("Okay, Penny! Go eat!");
    if ((Penny.stomach.hungry = true)) {
    console.log(`Penny: CRONCH CRONCH CRONCH...`);
    bowl.food.Amount = 0;
    Penny.stomach.hungry = false;
    console.log("All done your breakfast!");
  } else {
    console.log("Not hungry? Okay, Penny.... your call!");
  }
  return "Penny ate!";
}

function pennyDrinking() {
  if ((Penny.stomach.thirsty = true)) {
    console.log(`Penny: SLURP SLURP SLURP! ... `);
    bowl.water.Amount = 0;
    Penny.stomach.thirsty = false;
    console.log("Boy Penny, you sure were thirsty!");
  } else {
    console.log("Not thirsty? Okay!");
  }
  return "Penny drank!";
}

function allDone() {
    console.log('All Done!')
}

const {
  Penny,
  foodContainer,
  bowl,
  kitchenScale,
  executeAsynchronously
} = require("./dog_object_status");

module.exports = {
  partThree
};
