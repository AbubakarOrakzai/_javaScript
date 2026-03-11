//Array

let subject = ["Maths" , "Science", "English", "Hindi", "Sanskrit"];
console.log(subject);

subject.push("operating system");
console.log(subject);

subject.unshift("Computer Science");  // it will add the element at the beginning of the array
console.log(subject);           
subject.shift();  // it will remove the first element of the array

console.log(subject.includes("Maths")); // it will return true if the element is present in the array otherwise it will return false

console.log(subject.indexOf("Science")); // it will return the index of the element in the array if the element is present in the array otherwise it will return -1

const newArray = subject.join() // it change the type to the string and combine the whole array to one single string 


let myArray = ["Abubakar", "Ali", "Hassan", "Hussain"];
const mynewArray = myArray.slice(1,3);  // it will return the new array that will contain the elements from 1 to 3 
console.log(mynewArray);  // in the print section it will not print the last element as in our case it will not print the element at index 3

const mynewArray2 = myArray.splice(1,3);// it is print the value form the index to the 3 the element at the index 3 will also be printed  

/* ++ Key main difference between the slice and the splice is that:
 The slice method does not modify the original array 
however the splice method modifies the original array by removing the elements that are specified in the parameters and it also return the removed elements as a new array*/
