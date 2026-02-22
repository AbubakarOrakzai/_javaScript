// Value types and reference types in JavaScript

let x = "Abubakar Orakzai"; // x holds a primitive string value
let y = x; // y is assigned the value of x

x = "Computer Science"; // Changing x does not affect y

console.log(x); // Output: Computer Science
console.log(y); // Output: Abubakar Orakzai

//Here the value of the x is change however the vlaue of the y remain same
// that is why is is called value type because the value is directly stored in the variable

let p = {name: "Abubakar Orakzai"};
let q = p; // q references the same object as p

p.name = "computer science"; // Modifying the object through p

console.log(p.name); // Output: computer science
console.log(q.name); // Output: computer science

// the q value is change because the it is take referecne of p instead of taking the value directly