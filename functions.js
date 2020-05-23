// Your functions go here!
//Implement the filter Method on a Prototype
function filteringNumbers(input) {
   var numbersToDivide = [44, 16, 12, 64, 9, 33, 36, 15, input]; //global

   Array.prototype.numFilter = function (divideNumbers) {
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
