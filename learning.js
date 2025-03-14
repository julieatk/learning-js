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
let random = songs.at(getRandomInt(15));

console.log("size of array is " + size);
console.log("first song is " + first);
console.log("last song is " + last);
console.log("random song is " + random);

songs.push("soon you'll get better");

let sort = songs.sort();
console.log(sort);


// https://www.w3schools.com/js/js_arrays.asp
// https://www.w3schools.com/jsref/jsref_push.asp


const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

  const randomNumbers = randomIntArrayInRange(29, 87, 10);
  sizee = randomNumbers.length;

  console.log(randomNumbers);
  let min_element = 0;
  let max_element = 0;

  function maxDiff(arr, arr_size)
    {
        let max_diff = arr[1] - arr[0];
        min_element = arr[0];
        let i;
        for (i = 1; i < arr_size; i++) {
            if (arr[i] - arr[i-1]> max_diff){
              min_element = arr[i];
              max_element = arr[i-1];
            
                max_diff = Math.abs(arr[i] - arr[i-1]);
            }
            // if (arr[i] < min_element){
            //     min_element = arr[i];
            //   max_element = arr[1];
            // }
        }
        return max_diff;
    }

    maxDiff(randomNumbers,sizee);
    console.log("max diff is between " + min_element + " and " + max_element + " which is " + maxDiff(randomNumbers,sizee));

  // https://labex.io/tutorials/javascript-random-integer-array-in-range-28572
  // https://www.geeksforgeeks.org/maximum-difference-between-two-elements/

  const squaredArray = randomNumbers.map((num)=>Math.pow(num, 2));
  console.log("Squared array: ", squaredArray);

const maxSquaredValue = (Math.max(...squaredArray));
console.log("Squared array's max value is " + maxSquaredValue);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

const halfOfBiggest = maxSquaredValue / 2;
const filterSquaredArray = squaredArray.filter((num) => num > halfOfBiggest);
console.log("Numbers larger than half of the biggest number:", filterSquaredArray);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function getSum(total, num) {
  return total + Math.round(num);
}
const sumOfFilteredSquaredArray = filterSquaredArray.reduce(getSum, 0);
console.log("sum ", sumOfFilteredSquaredArray)

// https://www.w3schools.com/jsref/jsref_reduce.asp

console.log("Visual representation of the array:");
filterSquaredArray.forEach((num) => {
  const bar = "*".repeat(Math.round(num / 100));
  console.log(bar);
});

// https://www.geeksforgeeks.org/javascript-array-foreach-method/

class Drink {
  constructor(name, year, tasty) {
    this.namee = name; // Use 'this' to assign to instance properties
    this.yearr = year;
    this.tastyy = tasty;
  }

  // Custom print function
  print() {
    console.log(`Name: ${this.namee}, Year: ${this.yearr}, Tasty: ${this.tastyy}`);
  }
}

// Create an array of 10 Drink objects
const drinks = [
  new Drink("Boba", 1980, 90),
  new Drink("Coffee", 1995, 85),
  new Drink("Tea", 2000, 95),
  new Drink("Soda", 1975, 70),
  new Drink("Juice", 2010, 80),
  new Drink("Smoothie", 2005, 92),
  new Drink("Milkshake", 1985, 88),
  new Drink("Lemonade", 1990, 75),
  new Drink("Iced Tea", 2002, 89),
  new Drink("Water", 2020, 100),
];

const filteredDrinks = drinks.filter((drink) => drink.namee.includes("Tea"));
console.log("Filtered Drinks (name includes 'Tea'):");
filteredDrinks.forEach((drink) => drink.print());

const tastyScores = drinks.map((drink) => drink.tastyy);
console.log("Tasty Scores:", tastyScores);

drinks.forEach((drink) => (drink.tastyy += 5));
console.log("Updated Drinks (tasty score increased by 5):");
drinks.forEach((drink) => drink.print());

function sortDrinks(drinksArray, order = "asc") {
  return drinksArray.sort((a, b) => {
    if (order === "asc") {
      return a.tastyy - b.tastyy; 
    } else {
      return b.tastyy - a.tastyy; 
    }
  });
}

const sortedAscending = sortDrinks([...drinks], "asc");
console.log("Sorted Drinks (Ascending Order):");
sortedAscending.forEach((drink) => drink.print());

const sortedDescending = sortDrinks([...drinks], "desc");
console.log("Sorted Drinks (Descending Order):");
sortedDescending.forEach((drink) => drink.print());

//For theis last question i used AI because i was just really having trouble figuring it out. i asked it one by one the steps//