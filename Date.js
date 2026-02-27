// ==== Dates in javaScript =======

let myDate =new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2023, 0, 1); // January 1, 2023
console.log(myCreatedDate.toDateString());

// The timestamp is use to track the time in milliseconds super usefull for the app like quiz app 
let myTimeStamp = Date.now()     // As the timestamp show the time in milliseconds that was passed since january 1, 1970, so it will show the time in milliseconds that was passed since january 1, 1970 to the current time
console.log(myTimeStamp);

console.log(myCreatedDate.getTime()); // As the getTime() method return the time in milliseconds that was passed since january 1, 1970 to the date that we created so it will show the time in milliseconds that was passed since january 1, 1970 to the date that we created

// if we want to conver the timestamp milliseconds to second so we can do it 
console.log(Math.floor(Date.now()/1000)); // As the Date.now() return the time in milliseconds so we can divide it by 1000 to get the time in seconds and we can use the Math.floor() method to round down the time in seconds to get the whole number of seconds that was passed since january 1, 1970 to the current time

let newDate = new Date();
console.log(newDate.getMonth()); // As the getMonth() method return the month of the date that we created so it will show the month of the date that we created