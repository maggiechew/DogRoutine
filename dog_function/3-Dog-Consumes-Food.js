const {
  Penny,
  foodContainer,
  bowl,
  kitchenScale,
  sleep,
} = require("./Objects-Source.js");

let array = [pennyEating, pennyDrinking];

function dogConsumes() {
  for (let i = 0; i < array.length; i++) {
    array[i]();
    sleep(1000);
  }
  console.log("All done!");
}

function pennyEating() {
  console.log("Okay, Penny! Go eat!");
  Penny.location = "Kitchen";
  if (Penny.stomach.hungry == true) {
    console.log(`Penny: CRONCH CRONCH CRONCH...`);
    sleep(3000);
    bowl.food.amount = 0;
    Penny.stomach.hungry = false;
    console.log("All done your breakfast!");
  } else {
    sleep(1000);
    console.log("Not hungry? Okay, Penny.... your call!");
  }
}

function pennyDrinking() {
  console.log("But is Penny thirsty?");
  if (Penny.stomach.thirsty == true) {
    console.log(`Penny: SLURP SLURP SLURP! ... `);
    sleep(1500);
    bowl.water.amount = 0;
    Penny.stomach.thirsty = false;
    console.log("Boy Penny, you sure were thirsty!");
  } else {
    sleep(1000);
    console.log("Not thirsty? Okay!");
  }
}

module.exports = {
  dogConsumes,
};
