function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

 var number = getRandomInt(500);
 console.log(number);
 //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

 if (number % 9 ==0 && number % 7 ==0 ){
    console.log("number is divisible by 7 and 9");
    
}
else{ console.log("number is not divisible by 7 and 9");}


// https://stackoverflow.com/questions/66305058/check-if-number-is-divisible-by-another-number-in-js

function temprerature(temperature) {
    return temperature ? "50" : "40";
}

console.log(getFee(true));
