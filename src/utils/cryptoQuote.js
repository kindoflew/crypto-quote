export function cryptoQuote(string) {
  let cipher = generateCipher();
  let cryptArr = [];
  string.split("").forEach((character) => {
    if (character.match(/\W/)) {
      cryptArr.push(character);
    } else {
      cryptArr.push(cipher[character]);
    }
  });
  return quoteMappedByWord(cryptArr);
}

function generateCipher() {
  let newObj = {};
  let keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let values = shuffleArray(keys);
  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = values[i];
  }
  return newObj;
}

function shuffleArray(array) {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let tmp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = tmp;
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
