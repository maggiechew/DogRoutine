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
  amount: Math.floor(randomContainerFill()),
  location: "Kitchen",
};

const bowl = {
  water: {
    amount: Math.floor(randomContainerFill()),
    location: "Stand",
  },
  food: {
    amount: 0,
    location: "Stand"
  }
};

const kitchenScale = {
    isOn: false,
    isTared: false
}

// function executeAsynchronously(functions, timeout) {
//   for (let i = 0; i < functions.length; i++) {
//     setTimeout(functions[i], timeout);
//   }
// }


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function randomizeTrueFalse() {
  let x = Math.random();
  if (x>=0.5) return true;
  if (x<0.5) return false;
}

function randomContainerFill() {
  let x = Math.random();
  return x * 1000
}

// console.log(object.isBig)



module.exports = { Penny, foodContainer, bowl, kitchenScale, sleep };

// const foodContainerJSON = JSON.stringify(foodContainer)

// console.log(foodContainerJSON)