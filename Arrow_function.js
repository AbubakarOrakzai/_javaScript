// ===== Arrow function and this keyword =====
 
// This refer to the current context 

// ==== Arrow function ====

// Arrow function is shorter and clean way to write the function 
// 
const addtwo = (num1, num2)=>
{
    return num1 + num2;
}

console.log(addtwo(2,3));


// We can also write the arrow function as a implicit return function

const addtwo2 = (num1, num2) => (num1+num2);