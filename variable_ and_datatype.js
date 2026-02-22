//Primitive value Types
// Primitive include number, boolean, string, undefineed, null, symbol
//js is a dynamically typed language means you do not have to specify the type of variable while declaring it
let x = "hello";

// primitive integer type
let y = 12;
console.log(x);
console.log(typeof(x));

console.log(y);
console.log(typeof(y));

// primitive float type
let z = 1.5;
console.log(z);
console.log(typeof(z));

// primitive boolean type
let p = true;
console.log(p);
console.log(typeof(p));

// primitive undefined type
let w;
console.log(w);
console.log(typeof(w));

// Now as when i assigne the value of w to the string so it will change the type to string from undefined
w="Abubakar Orakzai";
console.log(w);
console.log(typeof(w));

// If you want to declare a variable and do not want to assign any value to it 
//so then one way is that write assign undefined but as this is not a good pratice so instead write null which will treat that variable as object type 