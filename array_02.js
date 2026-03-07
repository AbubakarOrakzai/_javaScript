let old = [1,3,5,7,9];
let even = [2,4,6,8,10];

old.push(even); // it will add the even array as an element in the old array
console.log(old); // it will print the old array with the even array as an element in it

// concat
let whole = old.concat(even);
console.log(whole); // it will print the whole array that is the combination of the old and even arrays


let natural = [1,2,3,4,5];
let wholeNumbers = [0,1,2,3,4,5];
let negativeNumbers = [-1,-2,-3,-4,-5];
let allnumbers = [...negativeNumbers,...wholeNumbers,...natural]; // it will combine all the arrays into one array using the spread operator
console.log(allnumbers); // it will print the allnumbers array that is the combination of the negativeNumbers, wholeNumbers and natural arrays

// solving the deep problem in the array

let arr1 = [1,2,3, [4,5,6],6,[7,8,9,[10,11,12]]];
// Now if you want to make this array to be a flat array which means that all the elements should be in one single array without any nested arrays so you can use the flat method to do that
let flatArr1 = arr1.flat(Infinity);

console.log( Array.isArray("Abubakar")); // it will return false because the string is not an array
console.log(Array .from("Abubakar")); // it will return an array that contains the characters of the string as elements in the array
 console.log(Array.from({name: "Abubakar"}))