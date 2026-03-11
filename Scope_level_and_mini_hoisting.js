//=== Closures ====

//  A closure is a function 
// that remembers the variables from its
// parent scope even after the parent function 
// has finished execution.

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(webiste);
    two();
}
   
one();

// So in above function the two function can access the username
// But the console.log(webiste) will give error beacuse it is access the
// the child function variable 

if(true){
    const username = "Abubakar Orakzai"
    if(username === "Abubakar Orakzai")
        {
           const website = "youtube"
           console.log(username+website);
        }
    }
    console.log(username);

    
    function addone(num){
          return num +1;
    }
    addone(5);