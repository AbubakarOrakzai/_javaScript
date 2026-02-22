//lexical Scope

/*So in lexical scope it firt check either value is present inside the 
function or block if it is available it will utilize that value and ignore the value outside the function and 
when there is no value inside the function then it go out the function or block for the value */

function Hello()
{
    let x = 20;
    console.log(x);
}
let x = 10;

// So here in the function or block above it will access the value x = 20 as it is available inside the function or block 

function number()
{
    console.loga(a);
}
let a=30;

// In the above function it will access the value of a = 30 as there is no value avaible inside the funciton or block 


// On other concept

function a()
{
    let b = 40;
}

console.log (b);

// In the above function the value of the b will not be printed as it is inside the function or block and i am access it outside the funciton or block 