// ==== Filter map and reduce ====

// Okay so the limitation with the foreach loop is that 
// it does not give us the return value and give us and undefined value 
// so the filter is same as the foreach but with some advantages that it 
// give us and return value 
// filter also give us a new array but as on the other hand foreach is only limited to the iteration so it 
// does not give us a new array 

const Num = [1,2,3,4,5,6,7,8,9,10]

const myNums = Num.filter((num) =>{
    return num >4
})

console.log(myNums);


// This filter is very usefull for the filtering the data

const books = [
    { id: 1, title: "The Silent Forest", author: "A. Rahman", genre: "Fiction", publish: 1987, pages: 320 },
    { id: 2, title: "Modern JavaScript", author: "David Mark", genre: "Programming", publish: 2018, pages: 450 },
    { id: 3, title: "Data Structures", author: "Robert Smith", genre: "Computer Science", publish: 2015, pages: 500 },
    { id: 4, title: "The Lost Kingdom", author: "Emily Clark", genre: "Fantasy", publish: 2005, pages: 380 },
    { id: 5, title: "AI Revolution", author: "John Miller", genre: "Technology", publish: 2022, pages: 290 },
    { id: 6, title: "Clean Code", author: "Robert Martin", genre: "Programming", publish: 2008, pages: 430 },
    { id: 7, title: "History of Civilizations", author: "Sara Khan", genre: "History", publish: 1999, pages: 600 },
    { id: 8, title: "Machine Learning Guide", author: "Andrew Cole", genre: "Technology", publish: 2020, pages: 510 },
    { id: 9, title: "The Dark Ocean", author: "Peter Hall", genre: "Mystery", publish: 2011, pages: 350 },
    { id: 10, title: "Algorithms Unlocked", author: "Thomas Lee", genre: "Computer Science", publish: 2016, pages: 410 }
];

const userbooks01 = books.filter((bk) => {
    return bk.id == 1;
});

console.log(userbooks01);

const userbook02 = books.filter((bk)=>{
    return bk.publish>2000;
})

console.log(userbook02);

// we can also use map 

// ==== Map =====

// The main difference between the map  and the filter is that filter is use to filter the data and remove the data that is 
// is not need in the array while the map is use to make changes in the data 

const array = [ 1 ,2 ,3,4 ,5 ,6 ,7,8,9,10]

const myarray = array.map((num)=>{
    return array * 20 ;
})

// ==== chaining ====

// Chaining is the concept where we write two or more than two method 

console.log("This is the chaining method");
let arrayi = [10,20,30,40,50,60,700,80,90,100];

let arrayi02 = arrayi
                .map((num) => num *20)  // now here it will take the value from the array and do then multiplication the it will save it 
                .map((num) => num +1)  // now here th value of the array will not use instead the value which is save above will be use here
                .filter ((num) => num >10)
                console.log(arrayi02);
                
// ==== Reduce ====

// Reduce is very important topic 
// it is take two value accumulator which is staring from 0
// and the second is the current value 
// Every time currentvalue take value from the array and add it to the accumulator 

console.log(" Thiis is the value of the reduce function")
const myNum = [1,2,3,4,5]

const mytotal = myNums.reduce(function (acc, current)
{
    return acc + current;
},0) // Here 0 tell the starting value of the accumulator

console.log(`The total value is ${mytotal}`)

// Now it return me the total value but now i want the value at each step like in the shopping cart we get to know the amount at the  each time the amount is added

const myNum02 = [1,2,3,4,5]

const mytotal02 = myNums.reduce(function (acc, current)
{
    console.log(`acc:${acc} and the current value is ${current}`)
    return acc + current;
},0)
console.log(`Total value is ${mytotal02}`)

// now we want to write the same reduce in the arrow function

const mytotal03 = myNums.reduce((acc, current) => acc + current,0)
console.log(mytotal03);

// One the example for the reduce method are below 

let courses = [
{
    course: "Dynamic Programming",
    teacher: "Abubakar Orakzai",
    price: 29999
},
{
    course: "Data Structures",
    teacher: "Ali Khan",
    price: 19999
},
{
    course: "Algorithms",
    teacher: "Sara Ahmed",
    price: 24999
},
{
    course: "Web Development",
    teacher: "Abubakar Orakzai",
    price: 15999
},
{
    course: "JavaScript Mastery",
    teacher: "Hamza Ali",
    price: 17999
},
{
    course: "C++ Programming",
    teacher: "Abubakar Orakzai",
    price: 12999
},
{
    course: "Object Oriented Programming",
    teacher: "Ayesha Noor",
    price: 18999
},
{
    course: "Machine Learning",
    teacher: "Dr Hassan Raza",
    price: 34999
},
{
    course: "Artificial Intelligence",
    teacher: "Abubakar Orakzai",
    price: 36999
},
{
    course: "Database Systems",
    teacher: "Kamran Shah",
    price: 21999
},
{
    course: "Operating Systems",
    teacher: "Abubakar Orakzai",
    price: 20999
},
{
    course: "Computer Networks",
    teacher: "Nadia Farooq",
    price: 19999
},
{
    course: "Cyber Security",
    teacher: "Imran Qureshi",
    price: 27999
},
{
    course: "Cloud Computing",
    teacher: "Abubakar Orakzai",
    price: 28999
},
{
    course: "React Development",
    teacher: "Ahmed Raza",
    price: 22999
},
{
    course: "Node.js Backend",
    teacher: "Saad Khan",
    price: 23999
},
{
    course: "Mobile App Development",
    teacher: "Hina Tariq",
    price: 25999
},
{
    course: "DevOps Engineering",
    teacher: "Abubakar Orakzai",
    price: 31999
},
{
    course: "System Design",
    teacher: "Dr Adnan Latif",
    price: 39999
},
{
    course: "Competitive Programming",
    teacher: "Bilal Ahmad",
    price: 26999
}
];

let total = courses.reduce((accumulator,item) => accumulator+item.price,0);
console.log(`The value of the couse is ${total}`); // This will print the total amount of the courses