const BASE_CIPHER = {
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  H: "H",
  I: "I",
  J: "J",
  K: "K",
  L: "L",
  M: "M",
  N: "N",
  O: "O",
  P: "P",
  Q: "Q",
  R: "R",
  S: "S",
  T: "T",
  U: "U",
  V: "V",
  W: "W",
  X: "X",
  Y: "Y",
  Z: "Z",
};

export function cryptQuote(string) {
  const cipher = generateCipher(BASE_CIPHER);
  let strArr = string.split("");
  let cryptArr = [];
  strArr.forEach((character) => {
    if (character.match(/\W/)) {
      cryptArr.push(character);
    } else {
      cryptArr.push(cipher[character]);
    }
  });
  return quoteMappedByWord(cryptArr);
}

function generateCipher(obj) {
  let newObj = {};
  let keys = Object.keys(obj);
  let newValues = shuffleArray(Object.values(obj));
  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = newValues[i];
  }
  return newObj;
}

function shuffleArray(array) {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

function quoteMappedByWord(array) {
  let newArray = [];
  let tmpArray = [];
  for (let i = 0; i < array.length; i++) {
    tmpArray.push([array[i], i]);
    if (array[i] === " " || i === array.length - 1) {
      newArray.push(tmpArray);
      tmpArray = [];
    }
  }
  return newArray;
}
