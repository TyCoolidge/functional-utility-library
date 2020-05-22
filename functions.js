// Your functions go here!
Array.prototype.numFilter = function (divideNumbers) {
   //;/ filter that carries the function of 'divideByFour'
   var numbersToDivide = [44, 16, 12, 64, 9, 33, 36, 15];
   var arrayFactors = []; /// empty array that results will be pushed into
   var divideByFour = numbersToDivide.numFilter(function (four) {
      //// this variable takes the array and filters out all numbers divisible by 4
      return four % 4 === 0;
   });
   var divideByThree = numbersToDivide.numFilter(function (three) {
      //// this variable takes the array and filters out all numbers divisible by 4
      return three % 3 === 0;
   });

   for (
      let i = 0;
      i < numbersToDivide.length;
      i++ /// goes through each index of array
   )
      if (divideNumbers(numbersToDivide[i]) === divideByFour) {
         // if input follows the parameters of being divisible by 4, then push those values into new array.
         arrayFactors.push(numbersToDivide[i]);
         return divideByFour;
      } else if (divideNumbers(numbersToDivide[i]) === divideByThree) {
         // if input follows the parameters of being divisible by 3, then push those values into new array.
         arrayFactors.push(numbersToDivide[i]);
         return divideByThree;
      } else {
         return "Please enter the numbers 3 or 4.";
      }
};
////Plan for function, if user input is 3, then return all numbers that are factors of it
/// else if input is 4, then return all numbers that are factos of that
/// else return "please enter the numbers 3 or 4"
