const Penny = {
  location: "Bedroom",
  hasToPee: randomizeTrueFalse(),
  stomach: {
    hungry: randomizeTrueFalse(),
    thirsty: randomizeTrueFalse(),
  },
  eats: 160,
};

const foodContainer = {
  Amount: randomContainerFill(),
  Location: "Kitchen",
};

const bowl = {
  water: {
    Amount: randomContainerFill(),
    Location: "Stand",
  },
  food: {
    Amount: 0,
    Location: "Stand"
  }
};

const kitchenScale = {
    isOn: false,
    isTared: false
}

function executeAsynchronously(functions, timeout) {
  for (let i = 0; i < functions.length; i++) {
    setTimeout(functions[i], timeout);
  }
}

function randomizeTrueFalse() {
  let x = Math.random();
  if (x>=0.5) return true;
  if (x<0.5) return false;
}

function randomContainerFill() {
  let x = Math.random();
  return (x * 1000)
}

// console.log(object.isBig)



module.exports = { Penny, foodContainer, bowl, kitchenScale, executeAsynchronously };

// const foodContainerJSON = JSON.stringify(foodContainer)

// console.log(foodContainerJSON)