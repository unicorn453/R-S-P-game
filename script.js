let scissor = "s";
let rock = "r";
let paper = "p";
let choice = [rock, paper, scissor];

function chooseRandom() {
  return choice[Math.floor(Math.random(choice) * choice.length)];
}
var input = prompt("Choose your move (p,s, or r)");
console.log(input);

function compare(chooseRandom, input) {
  for (const key in chooseRandom) {
    if (key == "s") {
      return scissor;
    } else if (key == "r") {
      return rock;
    } else if (key == "p") {
      return paper;
    }
    alert("I choose " + chooseRandom);
  }
  for (const key in input) {
    if (key == "s") {
      return scissor;
    } else if (key == "r") {
      return rock;
    } else if (key == "p") {
      return paper;
    }
  }

  let expression4 = chooseRandom == scissor && input == paper;
  let expression5 = chooseRandom == rock && input == scissor;
  let expression6 = chooseRandom == paper && input == rock;
  let expression7 = chooseRandom == rock && input == paper;
  let expression8 = chooseRandom == paper && input == scissor;
  let expression9 = chooseRandom == scissor && input == rock;

  if (expression4) {
    alert("I win ✅ You lose ❌");
  } else if (expression5) {
    alert("I win ✅ You lose ❌");
  } else if (expression6) {
    alert("I win ✅ You lose ❌");
  } else if (expression7) {
    alert("I lose ❌ you win ✅");
  } else if (expression8) {
    alert("I lose ❌ you win ✅");
  } else if (expression9) {
    alert("I lose ❌ you win ✅");
  } else {
    alert("draw");
  }
}

console.log(compare(chooseRandom(), input));
// for (compare) {
//   if (s < r) {
//     result = "win";
//   } else if (r < p) {
//     result = "win";
//   } else if (p < s) {
//     result = "win";
//   } else {
//     result = "lost";
//   }
// }
// console.log(result);

// if (chooseRandom ) {

// } else {

// }

// let output =
//    if (s < r) {
//     result = "win";
//   } else if (r < p) {
//     result = "win";
//   } else if (p < s) {
//     result = "win";
//   } else {
//     result = "lost";
//   }

// let decission = prompt("make decision", answer);
// if (s < r && r < p && p < s) {
//   result = "win";
// } else {
//   result = "lost";
// }

// let expression1 = (chooseRandom = scissor) || (input = scissor);
// let expression2 = (chooseRandom = rock) || (input = rock);
// let expression3 = (chooseRandom = paper) || (input = paper);
// let expression4 = (chooseRandom = scissor) > (input = paper);
// let expression5 = (chooseRandom = rock) > (input = scissor);
// let expression6 = (chooseRandom = paper) > (input = rock);
// let expression7 = (chooseRandom = rock) < (input = paper);
// let expression8 = (chooseRandom = paper) < (input = scissor);
// let expression9 = (chooseRandom = scissor) < (input = rock);

//   let expression1 = (chooseRandom = scissor) && (input = scissor);
//   let expression2 = (chooseRandom = rock) && (input = rock);
//   let expression3 = (chooseRandom = paper) && (input = paper);

// let compare = chooseRandom.localeCompare(input);
// console.log(compare);
//win lose expr

// let expression4 = scissor > paper;
// let expression5 = rock > scissor;
// let expression6 = paper > rock;
// let expression7 = rock < paper;
// let expression8 = paper < scissor;
// let expression9 = scissor < rock;
//conditions
// Write Your JavaScript Code Here
// if (expression1 || expression2 || expression3) {
//   console.log("Draw");
// } else if (expression4 || expression5 || expression6) {
//   console.log("win ❌ lose ❌");
// } else if (expression7 || expression8 || expression9) {
//   console.log("lose ✅  win ❌");
// }
// console.log(chooseRandom());
//prompt
