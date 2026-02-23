// Stack primitative datatype are store in the stack 

let a = 10; 
let b= a;
b=20;

console.log(a);  
console.log(b);

// As the primitive datatype use the call by use so the change will not reflect in the original value

// Heap non-primitive datatype are store in the heap

let obj1 = {
    name : "Ahmed"
        
}

let obj2 = obj1;
obj2.name = "Ali";

console.log(obj1.name);
console.log(obj2.name); 

// As the non-primitive datatype use the call by reference so the change will reflect in the original value