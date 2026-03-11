// ==== control flow ====

// control flow is all about the condition 

let score = 200;
 
if(score >150)
{
    console.log("you win the match");
}

// we also have the implicit condition 

let balance =1000

// In the implicit function we consider that there is brac in the function 
if(balance > 500) console.log("you have balance above than 500");


// ==== Switch ====

// Switch statment is use when you have multiple if and else condition so then we use the switch as it make our work easy

// === Quesiton : Print when the user enter the month april

const month = "april";

switch(month)
{
    case "jan ":
    {
        console.log("it is jan");
            break;
    }
    case "feb":
        {
            console.log("feb")
        }
        case "march":
            {
                console.log("March")
            }
            case "April":
                {
                    console.log("Yes you enter the correct month it is april")
                }
}

// ==== ++++ Truthy and falsethy value ++++ ====

// In thruthy value we check only the that does the value exit or not

// Truthy value
//  "0" zero count in the turhty value
// "false is also and truthy value"
// "Inshort the value in the string is known as turthy value"
// [] empty array and the {}, and function(){} are also consider to be turthy value 

const userEmail = "Abubakar Orakzai"

if(userEmail){
    console.log("Got the user email");
}
else{
    console.log("Don't have the user email ");
}

// so as you can see above we are not checking that the userEmail is equal to something we are just checking does the email exist or not 

// falsy value

// false 0 , -0, bigINT on, "", null, undefined, NAN


// Now let suppose you want to check that is the email entry by the user is empty or not beacuse the empty array is also consider to be turthy value 

if(userEmail.length === 0)
{
    console.log("Array is empty");
}

// If you want to check that is the object is empty or not 

const emptyObj = {}

if(Object.keys(emptyObj).lenght === 0)  // Object.keys is a static method returns an array of a given object
{
    console.log("Object is empty");
}

// ====  Nullish Coalescing operator (??): null undefined 

// The Nullish Coalescing Operator (??) in JavaScript is used to provide a default value when a variable is null or undefined.

// we have two case in the Nullish Coalescing operator 

// Case 01

let val1;
val1 = 5 ?? 10;
// now here the 5 value will be selected for the val1 and if we print the val1 it will print 5

// Case 02

let val2;
val2= null ?? 12;
// now here hte val2 = 12 

// Case 03
let val3
val3 = undefined ?? 14;
// now here also the val3 = 14  

// ==== Terniary Operator ====

// condition ? ture :false 

let  price = 1000000;

price === 1000000 ? console.log(" The balance is equal to 10 lac"): console.log("Thge balance is not equal to the 10 lac ")