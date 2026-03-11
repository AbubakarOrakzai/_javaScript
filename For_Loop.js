// ==== for loop ====
console.log("All about the loops");
for(let i=1; i<10; i++)
{
    console.log(i);
}


for(let i=1; i<=10; i++)
{
    if(i==4)   // So in this loop the moment the i = 4 
    // and it goes to the if condition so first it will print 4 it best value and 
    // then when it come out of the if condition then it print 4
    {
        console.log("4 is the best number");
    }
    console.log(i);
}

// ==== Nested Loop ====

console.log("This is nested loop");

for(let i =1; i<=10; i++)
{
    console.log("This is outer loop");
    for(let j= 1; j<=10; j++) // This will print 10 times 
    {
        console.log(j); // This will printed 100 times
    }
}

// Printing table of 10 

for(let i =1; i<=10; i++)
{
    for(let j =1; j<=10; j++ )
    {
        console.log(i + " * " + j + " = " + i*j)
}
}

// === break and continue 

for(let i=1; i<=10 ; i++)
{
    if(i==4)                  // So in the break the movement it become 4 it will execute the instruction inside the if condition  it stop the excution the instruction below it and end the loop 
    {
        console.log("4 is the best value in the loop ")
        break     
    }
    console.log(`Value = ${i}`)
}

// Continue

// In the continue it will only skip one value or does not exute the below instruction only one time 
// like in our case it will only not print the value of the 10 
for(let i =1 ; i<=10; i++)
{
    if(i == 10 )
    {
        console.log(" 4 is the best value in the loop")
        continue;
    }
   console.log(`Value = ${i}`)
}