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
