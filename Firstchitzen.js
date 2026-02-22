// First Chitzen in Javascript

/* Regular function in javascript is know as first chitzen function
    because in javascript function is created first in the memory then variables*/


function add(a, b ) //  So this is the simple function 
{                   // here memory is allocated for the fucnction 
    return a + b;      
}
 
console.log(add);// It will log the function 

console.log(add(2,3));// This is loging the value of the function 

let sum = function(a, b) // here memory is allocated for the variable not for the function 
{
    return a + b;
}

/* however both means the sameting but how they are working is completely different*/


////////////////////////////////////////////////////////

//Passing function as an argument

// Higher order function

/* In javasScipt the Higher order function is a regulary function which that take one or more function 
as argument, or returns a function as its result*/ 

function operate(operatefunc, a, b) // here we are passing function as an argument
{
    return operatefunc(a, b);
}

console.log(operate(add, 5, 3)); // here we are passing add function as an argument to the operate function