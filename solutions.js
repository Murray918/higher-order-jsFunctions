console.log('hi');

// Define a function lengths that takes in one argument.
//     arr (array of strings)
//
// It returns a new array of numbers where each element is the length (number
// of characters) of the corresponding element in the input. For example:
//   lengths(['Kenneth', 'Ian', 'Ryan']) will output [7, 3, 4].


let names = ['Kenneth', 'Ian', 'Ryan'];

function lengths(arr) {
  return arr.map(f => f.length);
}
console.log(lengths(names));


// Define a function named max that takes in one argument.
//    arr (array of numbers)
//
// Return the maximum number in the array. For example, given [1, 2, -3, 4],
// then return 4. If the array is empty, return -Infinity.

let numbers = [1, 2, -3, 4];

function max(arr){
  return Math.max.apply(null, arr);
}
console.log(max(numbers));

// Define a function named filterPassingGrades that takes in one argument.
//     grades (array of numbers)
//
// Return a new array with any grade less than 70 filtered out. For example,
// given [88, 67, 70, 92, 53], then return [88, 70, 92].
//

let grades = [88, 67, 70, 92, 53];

function filterPassingGrades(grades) {
  return grades.filter(function(score){
    return score >= 70;
  });
}
console.log(filterPassingGrades(grades));



// Define a function named min that takes in one argument.
//    arr (array of numbers)
//
// Return the minimum number in the array. For example, given [1, 2, -3, 4],
// then return -3. If the array is empty, return Infinity.
//
 let nums = [1, 2, 3, -3, 4]

 function min(nums){
   return Math.min.apply(null, nums);
 }
 console.log(min(nums));
