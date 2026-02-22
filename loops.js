//   ============================= Loops ===============================
for(let a=0; a<=100; a++)
{
    console.log("Abubakar Orakzai");
}
console.log("Loop ended");


 let Factorial= 1;
for(let b=10; b>=1; b--)
{
   
     Factorial = Factorial* b;
    console.log("Factorial " + Factorial);
}


let str="*";
for(let c=1; c<=10; c++)
{ 
    console.log(str);
    str = str + "*";
}
console.log("Triangle pattern ended");
//Reverse triangle pattern
let d=0;

for(let e=10; e>=1; e--)
{
    let row="";
    for(let f=1; f<=e; f++){
        row= row + "*";
   
}
     console.log(row);
}

//for of loop

let name= "Abubakar";

for(let character of name)
{
    console.log(character);
}

//key vlaue

let student ={
    name: "Abubakar Orakzai",
    age: 21,
    city: "Peshawar"
}

for(let key in student)
{
    console.log("key",student[key]);
}

let persons ={
    name: "Mughees",
    age:20,
    city: "Lahore",
}
for (let key in persons){
    console.log("key",persons[key])
}


//Printing all the even numnbers from 0 to 100

for (let i=1; i<=100 ; i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}

//Gussing the game number 

let Gamenumber =25;

let userNumber = prompt("Guess the Game number");

while (userNumber != Gamenumber)
{ 
   userNumber = prompt("you enter wrong number please tr again");
}
console.log("congratulations you gussed the number");

                // ===================================== Strings ===============================
//Template leterals 

//Template literals is a way to embed expressions within string literals, allowing for easier string interpolation and multi-line strings

let persons2 ={
    name: "Mughees",
    age:20,
    city: "Lahore",
}

console.log(`Person name is ${persons2.name} and age is ${persons2.age} and city is ${persons2.city}`);

//String interpolation

/* string interpolation is the process of embedding expressions within string literals, allowing for 
dynamic construction of strings by inserting variable values or expressions directly into the string.*/


//== String Methods 

let name1 = "Abubakar Orakzai";
console.log(name1.toUpperCase());   // Convert to uppercase
console.log(name1);

console.log(name1.toLowerCase());   // Convert to lowercase

console.log(name1.length);         // Get the length of the string

let n = "   Hello World   ";
console.log(n.trim());            // Remove whitespace from both ends

console.log(name1.indexOf("Orakzai")); // Find the index of a substring

console.log(name1.slice(0, 7));       // Extract a substring and in slice the ending index is not included

console.log(name1.replace("Orakzai", "Khan")); // Replace a substring with another substring

let firstName = "Abubakar";
let lastName = "Orakzai";

let Fullname = firstName.concat(" ", lastName); // Concatenate strings
console.log(Fullname);

//finding character at specific position

let charAtPos = name1.charAt(3); // Get character at index 3
console.log(charAtPos);


// Problem 

let userFullname = prompt("Enter your full name: ");

let Fullname1 = "@" + userFullname.trim() + userFullname.length;

console.log (Fullname1);

//============================== End of Strings =============================