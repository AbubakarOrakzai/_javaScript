let heros =["Superman", "Batman", "Ironman", "Spiderman"];
console.log(heros);

for(let i=0; i<heros.length; i++){
    console.log(heros[i]);
}


let pricesofproducts =[100, 200, 300, 400, 500];

for(let i=0; i<pricesofproducts.length; i++)
{
    let offer = pricesofproducts[i]*20/100;
    let finalprice = pricesofproducts[i]-offer;
    console.log(finalprice);
}

//Array Methods

let fruits = ["Apple, banana,Manago ,grapes"];

fruits.push("Pineapple");   // Add element at the end 
console.log(fruits);

fruits.pop();   // Remove element from the end
console.log(fruits);
console.log(fruits.toString());

// We can also do this with the numbers 

let marks = [45,10,40,50];

console.log(marks.toString());

//concat Method

let Marvelheros = ["Spiderman, Hulk, Ironman"];
let Dcheros= ["Batman, Flash,"];

let Hores = Marvelheros.concat(Dcheros);

console.log(Hores);

//unshift method
let colors = ["Red, Green, Blue"];
colors.unshift("Yellow");   // Add element at the beginning
console.log(colors);

//shift method it will delete the first element of the array
colors.shift();
console.log(colors); // now the Yellow is removed from the array 

//Slice Method 

// Slice method is used to slice the array from a particular index to another index

let animals = ["Dog", "Cat", "Elephant", "Tiger", "Lion"];

let slicedanimals = animals.slice(1,4);  // it will slice from index 1 to index 4 but not including index 4
console.log(slicedanimals);

//Splice Method     
// Splice method is used to add or remove elements from the array at a particular index

let birds = ["Sparrow", "Pigeon", "Parrot", "Eagle"];   
birds.splice(2,0,"Peacock");  // it will add Peacock at index 2      i.e {starting index, number of elements to remove, element to add}
console.log(birds);

let companies= ["Bloomerg", "Google", "Uber","Microsoft", "uber", "Google","IBM","Netfilx"];

console.log("Remove the Bloomberg from the array ");
companies.shift();  // Remove the first element (Bloomberg)
console.log(companies);

console.log("Remove Uber from the array");
companies.splice(1,1);
console.log(companies);

console.log("Add Ola at index 2");
companies.splice(2,0,"Ola");
console.log(companies);

companies.push("Amazon");
console.log("Add Amazon at the end of the array");
console.log(companies);
