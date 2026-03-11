// ============ object in JavaScript ============
/*
we have two type of object in JavaScript
1. Object literal
2. Object constructor   

object constructor 
The object create through the object constructor is called singleston object
 because it is created through the object constructor and it is not created through the object literal
*/

 object.create()

 //object literal 
let person = {
    name: "Abubakar",       
    age: 21,
    city: "Lahore",
    country: "Pakistan"
};

// === Accessing the object ===
//we can also access the object through two ways 

//1. Dot notation
console.log(person.name); // it will print the name of the person

//2. Bracket notation
console.log(person["name"]); // it will print the name of the person
/*
Both of the above are use to access the object but 
when we write the like "name "= "Abubakar"
now we can not access the name property of the person through the dot notation
because it will give us an error because it is not a valid identifier
but we can access it through the bracket notation because it is a valid identifier in the bracket notation*/

 // == Accessing symbol as a key

   let mysum =  Symbol("key1");

   let Maths = {
department: "Maths",
teacher: "Abubakar",
[mysum]: "This is the sum of the two numbers"
   };

   console.log(Maths[mysum]); // it will print the value of the symbol key in the Maths object

   // Freezing the object 

//By freez we will stop the modification of the object and we and we can not add new properties to the object and we can not delete the properties of the object and we can not change the values of the properties of the object
Object.freeze(Maths);
Maths.teacher = "Ali"; // it will not change the value of the teacher property because the object is frozen