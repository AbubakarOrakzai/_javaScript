// Local Context 

/* so when we define a function so local context is created
  and when the function is executed the local context is destroyed*/

  function Hello(){
    let x= 20;
    console.log(x);
}

Hello();