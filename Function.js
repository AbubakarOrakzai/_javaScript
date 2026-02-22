//  =================================== Function ===================================

function sum(a,b)
{
    let s = a + b;
    console.log(s);
    return s;

}

let result = sum(5,10);
console.log("The result of the function is: " + result);

const sum1  = (a,b)  => {
    console.log(a+b);
    return a + b;
}
let result2 = sum(20,30);

// Problem : Write a function that will take string as  a parameter and will return the number of vowels in it 

function countVowels(str){
    let count = 0;
    for(char of str)
    {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    console.log("count: " + count);
    return count;
}
let totalvowel = countVowels("Hello World");
console.log("The total number of vowels in the string is: " + totalvowel);

// For each Method     == also know as higher order function : Higher order function is a function that takes another function as an argument

let arr=[1,2,3,4,5];

arr.forEach(function print(value)    // Value at each index
{
    console.log(value);
});

// Another way to write the same function 

arr.forEach((value) => {
    console.log(value);
})

// Map Method == it will return a new array after performing some operation on each element of the array

let Array = [1,2,3,4,5];

let newArray  = Array.map((value)=>
{
    return value * 2;
});

console.log(newArray);  // [2,4,6,8,10]


// ** Okay so now the common confusion will arise that then what is the difference between forEach and map method?
                 // ForEach is use to calculate some value and that value will not change the original array however if you use map method
                 // it will change the array


// Filter Method == It is use to filter the data form the array and only store the filter data in the arry 

let numbers = [10,15,20,25,30,35,40];

let evenNumber = numbers.filter((value)=>{
    return value %2 ==0 ;
})

console.log(evenNumber);
