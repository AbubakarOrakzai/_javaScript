const obj1 = {};                 // Object literal :: This is non single ton object
const obj2 = new Object();       // Constructor    :: This is single ton object
const obj3 = Object.create({});  // With custom prototype

const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "Abubakar";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

 const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: "Abubakar Orakzai",
        firstname: "Abubakar",
        lastname: "Ali"
    }
 }

  console.log(regularUser.fullname.firstname); // it will print the firstname of the regularUser object

  // Combining two or more objects

  const obj4 = { 1: "a", 2: "b" };
  const obj5 = { 3: "c", 4: "d" };
  const combineobj = Object  .assign({},obj4,obj5); // it will combine the obj4 and obj5 objects into one object and it will return the new object
    console.log(combineobj); // it will print the combined object that is the combination of the obj4 and obj5 objects
    
// There is one other way to combine the objects
const obj7 = { 1: "a", 2: "b" };   
const obj8 = { 3: "c", 4: "d" };
const combineobj2 ={...obj7,...obj8};

// Now we will access the keys, values and the attributes of the object tinderUser which we have created above 

console.log(Object.keys(tinderUser)); 
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name")); // it will return true because the name property is an own property of the tinderUser object