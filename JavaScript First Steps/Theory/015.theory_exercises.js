function convertMinutesIntoSeconds(minutes) {
  return minutes * 60;
}

// console.log(convertMinutesIntoSeconds(5));

function ensureQuestion(str) {
  return str.endsWith("?") ? str : `${str}?`;
}

// console.log(ensureQuestion('dwqdwdwd'));

// function maxOfNumbers(numbers) {
//     return numbers.sort();
//     return numbers.pop();
// }
// zadziała tylko wtedy gdy w tablicy numbers nie zostanie przekazany null

function maxOfNumbers(numbers) {
  let maxValue = numbers[0];
  numbers.forEach((number) => {
    maxValue < number ? (maxValue = number) : maxValue;
  });
  return maxValue;
}

// console.log(maxOfNumbers([2, 5, 9, 2, 0, 4, '2', '', null]));

function sarcasticCase(str) {
  let dividedStr = str.split("");
  for (let i = 0; i < dividedStr.length; i++) {
    i % 2 === 0
      ? (dividedStr[i] = dividedStr[i].toUpperCase())
      : (dividedStr[i] = dividedStr[i].toLowerCase());
  }
  return dividedStr.join("");
}

// console.log(sarcasticCase(" ksefwodfowfowe"));

// function noSpace(str) {
//   let splitStr = str.split("");
//   let noSpaceStr = [];
//   for (let i = 0; i < splitStr.length; i++) {
//     noSpaceStr[i] = splitStr[i].trim();
//   }
//     return noSpaceStr.join('');
// }

// function noSpace(str) {
//   let newString = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       newString = newString + str[i];
//     }
//   }
//   return newString;
// }

function noSpace(str) {
  return str.split(" ").join("");
}

// console.log(noSpace("Ala ma kota a kot ma Ale która kocha mamę"));

function squareSum(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number * number;
  });
  return sum;
  // return numbers.map(number => number * number);
}

// console.log(squareSum([1, 3, 4, 5, 10]));

// function positiveSum(numbers) {
//   let sum = 0;
//   numbers.forEach((number) => {
//     number > 0 ? (sum += number) : sum;
//   });
//   return sum;
// }

function positiveSum(numbers) {
  return numbers
    .filter((number) => number > 0)
    .reduce((previousValue, currentvalue) => previousValue + currentvalue, 0);
  //reduce(callbackFn, initialValue)
}

console.log(positiveSum([2, 4, -3, 1, -5, -10, 10]));
