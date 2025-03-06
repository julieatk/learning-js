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


console.log("arrow");


arrow = (val, num) => arithmetic(val, num);
let val = getRandomInt(100);
let num = getRandomInt(100);

console.log(val);
console.log(num);

console.log(arrow(val, num));

const songs = [];
songs[0]= "cruel summer";
songs[1]= "lover";
songs[2]= "the man";
songs[3]= "the archer";
songs[4]= "i think he knows";
songs[5]= "miss americana";
songs[6]= "paper rings";
songs[7]= "cornelia street";
songs[8]= "death by a thousand cuts";
songs[9]= "london boy";
songs[10]= "you need to calm down";
songs[11]= "false god";
songs[12]= "afterglow";
songs[13]= "it's nice to have a friend";
songs[14]= "daylight";

let size = songs.length;
let first = songs.at(0);
let last = songs.at(14);

console.log("size of array is " + size);
console.log("first song is " + first);
console.log("last song is " + last);

// https://www.w3schools.com/js/js_arrays.asp
