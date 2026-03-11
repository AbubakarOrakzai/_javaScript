// Immediately Invoked Function Expression (IIFE)

// IIFE is an function that runs as soon as it is defined.
// When we design an app so write code in the file for the connection to

//The database so we want as soon as the app app is open the file should run.
// It also help us to avoid the pollution form the global scope.

// we can simple write the connection function like this 

function connectToDatabase() {
    {
        console.log("DB CONNECTED");
    }

    // But we also want to avoid the pollution for the global scope.

    // So we can write the above function as an IIFE like this

    (function connectedToDatabase() {
        console.log("DB CONNECTED");
    })(); // must add the semelicoon because then it does not know when to stop the exection of the function.

    ( (name)=>{
        console.log(`DB CONNECTED ${name}`);
    })("Abubakar Orakzai");