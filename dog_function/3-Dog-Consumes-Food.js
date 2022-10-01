const {
  Penny,
  foodContainer,
  bowl,
  kitchenScale,
} = require("./dog_object_status");

async function dogConsumes() {
  await pennyEating();
  await pennyDrinking();
  await allDone();
  return "Part Three Complete; Process Complete";
}



function pennyEating() {
  console.log("Okay, Penny! Go eat!");
  return new Promise((resolve) => {
    if (Penny.stomach.hungry == true) {
      console.log(`Penny: CRONCH CRONCH CRONCH...`);

      setTimeout(() => {
        bowl.food.Amount = 0;
        Penny.stomach.hungry = false;
        console.log("All done your breakfast!");
        resolve("Penny ate");
      }, 3000);
    } else {
      setTimeout(() => {
        console.log("Not hungry? Okay, Penny.... your call!");
        resolve(`Penny wasn't hungry!`);
      }, 1000);
    }
  });
}

function pennyDrinking() {
  console.log("But is Penny thirsty?");
  return new Promise((resolve) => {
    if ((Penny.stomach.thirsty == true)) {
      console.log(`Penny: SLURP SLURP SLURP! ... `);
      setTimeout(() => {
        bowl.water.Amount = 0;
        Penny.stomach.thirsty = false;
        console.log("Boy Penny, you sure were thirsty!");
        resolve("Penny drank");
      }, 1500);

      //
    } else {
      setTimeout(() => {
        console.log("Not thirsty? Okay!");
        resolve("Penny drank");
      }, 1000);
      
    }
  });
}

  function allDone() {
    return new Promise((resolve) => {
        console.log('All Done!');
        resolve ('All done')
  })
}
  

// pennyDrinking();
// dogConsumes();

  module.exports = {
    dogConsumes
  };
