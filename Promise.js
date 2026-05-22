        // ** ========= Promise in javaScript ====== **

/* The Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value 
   Promise have three states:
   - pending: intial state, neither fulfilled or rejected
   - fulfilled: meaning that the operation was complete successfully
   - rejected: meaning that the operation failed.*/

   const promiseOne = new Promise(function(resolve, reject)
{
     // Do an sync task
     // DB calls , crytography, network
     setTimeout(function(){
          console.log("Async task is complete");
          resolve()
     }, 1000);
})

promiseOne.then(function(){
     console.log("Promise consumed");
})

new Promise(function(resolve, reject){
       setTimeout(function(){
          console.log("Async task 2")
          resolve()
       }, 1000)
}).then(function(){
     console.log("Async 2 resloved")
})

//Execution Flow:

/*1. Promise object is created.
2. Promise executor function runs immediately.
3. setTimeout() is registered in Web APIs.
4. JavaScript continues execution without waiting.
5. After 1 second:
      - "Async task 2" is printed.
      - resolve() is called.
6. Promise state changes from pending -> fulfilled.
7. .then() callback is pushed to the microtask queue.
8. "Async 2 resolved" is printed.*/

const promiseThree = new Promise(function(reslove, reject){
     setTimeout(function()
{ 
            resolve({username: "chai", email: "chai@example.com"})
}, 1000)
})

promiseThree.then(function(user){
     console.log(user);
})

const promiseFour = new Promise(function(reslove,reject)
{
     setTimeout(function()
{
     let error=true
     if(!error)
     {
          resolve({username:"hitesh", password:"123"})
     }
     else{
           reject("Error: Somthing went wrong")
     }
}, 1000)
})


