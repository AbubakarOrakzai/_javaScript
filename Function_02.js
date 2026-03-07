// ==== Function ====

// In the ecomerce project we most use the feature add to cart and the product is keep add to the cart and the price of the product is adding 
// so inoder to do that we create a function 

function addtocart(...price)
{
    return price;
}

addtocart(100,200,300,400,500); // so now the function is carrying the price of the product in the array form in same order as we pass it 

// === Handling object in the function ==== 
  
// In the handling object with the function we are connecting the function with the object 
 
const user = {
    username: "hitesh",
    price: 1000
}

function handleobject(anyobject)
    {
        console.log(`name is ${anyobject.username} and price is ${anyobject.price}`);
    }

    handleobject(user);

// we can also pass the object directly in the funciton 

handleobject({
    username: "Abubakar",
    price: 2000
})

// we can also pass the array 

const mynewArray =[200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1];
}

console.log(returnSecondValue(mynewArray)); // it will return the second value of the array which is 400