// Your functions go here!
//Implement the filter Method on a Prototype
function filteringNumbers(input) {
   var numbersToDivide = [44, 16, 12, 64, 9, 33, 36, 15, input]; //global

   Array.prototype.numFilter = function (divideNumbers) {
      // divideNumbers is the callback that triggers line 21
      //;/ filter that carries the function of 'divideByFour'
      var arrayFactors = []; /// empty array that results will be pushed into

      for (
         let i = 0;
         i < numbersToDivide.length;
         i++ /// goes through each index of array
      )
         if (divideNumbers(numbersToDivide[i]))
            // if input follows the parameters of being divisible by 4, then push those values into new array.
            arrayFactors.push(numbersToDivide[i]);
      return arrayFactors;
   };

   var divideByFour = numbersToDivide.numFilter(function (four) {
      //// this variable takes the array and filters out all numbers divisible by 4
      return four % 4 === 0;
   });
   return divideByFour;
} //TODO try to add two inputs

///Return Part of an Array Using the slice Method
function sliceArray(inputBeginSlice, inputEndSlice) {
   // It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice
   var inputGuards = ["Curry", " Magic", " Kyrie", " Stockton", " Nash"];
   var newArray = inputGuards.slice(inputBeginSlice, inputEndSlice);
   return newArray;
}

//Remove Elements from an Array Using slice Instead of splice
function sliceNotSplice(input) {
   var inputConsoles = ["PS4", " Xbox One", " Switch", " Wii", " Dreamcast"];

   return inputConsoles.slice(0, input);
}

///testing Combine Two Arrays Using the concat Method
function userConcat(concatInput) {
   if (concatInput === 1) {
      return legends.concat(option1);
   } else if (concatInput === 2) {
      return legends.concat(option2);
   } else if (concatInput === 3) {
      return legends.concat(option3);
   } else {
      return legends;
   }
}
var legends = ["MJ", " Kobe", " Lebron"];
var option1 = [" Kareem", " Wilt"];
var option2 = [" Shaq", " Bird"];
var option3 = [" Magic", " Pippen"];
//////////////////////////////////////////////////
//Add Elements to the End of an Array Using concat Instead of push//
function concatNotPush(input) {
   if (input === "green" || input === "Green") {
      return array1.concat(array2);
   } else if (input === "yellow" || input === "Yellow") {
      return array1.concat(array3);
   } else if (input === "purple" || input === "Purple") {
      return array1.concat(array4);
   } else if (input === "orange" || input === "Orange") {
      return array1.concat(array5);
   } else {
      return "Please enter a different color";
   }
}
var array1 = [" Red", " Blue"];
var array2 = [" Green"];
var array3 = [" Yellow"];
var array4 = [" Purple"];
var array5 = [" Orange"];

//////Use the reduce Method to Analyze DataPassed

function reduceAndAccumulator(input) {
   var numbers = [3, 4, 5, 6, 7, 8, 35, 67, input];
   var sum = function (accumlator, currentIndexValue) {
      return accumlator + currentIndexValue; /// starts at the 0 index - accum = 0 + current = 3 => accum = 3 + current = 4 => accum = 7 + current + 5..etc.
   };
   var averageNumbers = numbers.reduce(sum) / numbers.length; //The reduce method iterates over each item in an array and returns a single value
   /// takes the array numbers and uses the reduce method to add all values together
   /// the value is then divide by the total length of the array
   if (input == null || input == "") {
      // if input is empty then display error message // https://stackoverflow.com/a/21017888
      return "Please type in a number";
   } else {
      return averageNumbers;
   }
}

///Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// we want to filter the array with only strings, the map the array by capitatlizing the filtered elements
function complexProblem(input) {
   var randomArray = [
      3,
      "coding",
      4,
      "tyler",
      true,
      ,
      5,
      null,
      false,
      "cat",
      input,
   ];
   let justStrings = randomArray
      .filter(function (strings) {
         if (typeof strings == "string") {
            return strings; /// after console logging, can confirm that this filters out the strings
         }
      })
      .map(function (strings) {
         /// will take the newly adjusted array and manipulate it
         return strings.toUpperCase(); // all strings will be capitalized
      });
   return justStrings; // returns the array justStrings which should only have capitalized strings
}
// Sort an Array Alphabetically using the sort Method-->

function abcOrder(input) {
   var abcOrder = [" Tom", " Jim", " Emily", " Bob", " Sam", " " + input];
   return abcOrder.sort(function (a, b) {
      return a === b ? 0 : a > b ? 1 : -1;
   });
}
// if (input !== input.toUpperCase()) {
//    return input.charAt(0).toUpperCase() + input.slice(1); // if user input is a lowercase string, the first letter will return Uppercase, followed by the rest of the string //https://stackoverflow.com/a/1026087
// }
//TODO add this to function

//Return a Sorted Array Without Changing the Original Array

function doNotChangeArr(input) {
   var globalArray = [30, 45, 65, -4, -2, 43, input];
   var empty = [];
   return globalArray.concat(empty).sort(function (a, b) {
      // To compare numbers instead of strings, the compare function can simply subtract b from a.
      return a - b; // the array will sort the numbers in ascending order
   });
}

//Split a String into an Array Using the split Method

function splittingString(input) {
   var firstSplit = "The dog.jumped-over$the fence";
   var secondSplit = "I-love)to(eat%Food";
   var thirdSplit = "Nice2to8meet3you";
   if (input == 1) {
      return firstSplit.split(/\W/); // splits all symbols and punctuations
   } else if (input == 2) {
      return secondSplit.split(/\W/); //splits all symbols and punctuations
   } else if (input == 3) {
      return thirdSplit.split(/\d/); // splits all digits
   } else {
      return "please type a number between 1-3";
   }
}

////
