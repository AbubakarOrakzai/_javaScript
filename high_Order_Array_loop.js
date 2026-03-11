// ==== High oder  Array loop ====

// It is same as the loop with the short syntax and do something automatical like increament the value etc
const arr = [1,2,3,4,5]

for (const num of arr)  // Here the num is temporary varaible use to hold data it is same as (i) we use in the loop 

{
    console.log(num)
}

let Greeting = "Hello world";

for(const val of Greeting)
{
    console.log(`The value of the greeting is ${val}`)
}

// ==== Maps =====

// Map is same as object but one main difference is that it note the sequence of the enteries
// and Map only print unique values
// Map is use to store data just like object with some advantages
// In Map below example 'IN', 'USA','fr' are the key and "INDIA","USA","FRANCE" are the value.

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', "United stated of America")
map.set('fr',"France")

console.log(map)
// now if we want to print the Map through higher order loop so we can do it

for(const value of map)
{
    console.log(`key and value of the map are ${value}`)
}
// Now it will print both the key and the value of the map

// but what if we do not want to print both

for(const [key , value] of map)
{
    console.log(`key and the value of the Map are  key : -${key} and value the Map are ${value} `);
}

for(const [key ,value] of map)
{
    console.log(`key ${key}`)
}

// ==== Using the high order loop for the object 

// we can not use the for in for the object so instead we use the for in 

let myObject = {
      js  : "javaScript",
      rb : "Ruby"
}
for ( const key in myObject)
{
    console.log(`The value for the short cut ${key} is equal to ${myObject[key]}`);
}

// Now we want to use to high order loop in the array

let array = ["superman", 'ironman', "spiderman"]

for(const key in array)
{
    console.log(`key of the array is ${key}`);
    console.log(`Value of the array is ${array[key]}`);
}

// ==== Using forEach loop in Array ==== 

let myarray = [ "Ironman", "Siderman", "Superman"];

myarray.forEach(function (value)
{
    console.log(`The value of the array is ${value}`);
})

// We can also write the forEach in the arrow function formate
myarray.forEach((value)=>
{
    console.log(`The value of the array is ${value}`)
})

// Now we will pass the function and then use it as a parameter of the forEach loop

let array01 = ["Ironman","Siperman"];
function printme(value){
    console.log(`The value of the array is ${value}`);
}

array01.forEach(printme);


// Now there is concept which says that there is multiples objects inside the array 
// so we will use the forEach loop for that now

let object = [
 {    programminglanguage : "javaScript",
     shorcut : "js"
},
{
    programminglanguage : "python",
    shortcut : "py"
},
{
    programminglanguage : "rube",
    shortcut : "rb"
},
]
object.forEach((item)=>{
    console.log(`Value = ${item.programminglanguage}`)
})