function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

 var number = getRandomInt(100);
 console.log(number);
 //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

 if (number % 9 ==0 && number % 7 ==0 ){
    console.log("number is divisible by 7 and 9");
    
}
else{ console.log("number is not divisible by 7 and 9");}


// https://stackoverflow.com/questions/66305058/check-if-number-is-divisible-by-another-number-in-js

let temp = number;

let res = (temp < 60) ? "too cold" :
          (temp > 90) ? "too hot" :
          (60 < temp < 90) ? "perfect" : "Excellent";

console.log(res);

// https://www.geeksforgeeks.org/javascript-ternary-operator/

let p1 = 4
let p2 = 8

function arithmetic(p1, p2) {
    return p1 + p2;
  }

  console.log( arithmetic(p1, p2));

//   https://www.w3schools.com/js/js_functions.asp

