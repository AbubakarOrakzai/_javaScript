// Hosting in Javascript 

/* In most of the programming languages, we need to declare variables and functions before we use them.
however we have hosting concept in javascipt which allow us to use variables and functions before declaring them 
so in javascript we have two phase of execution
1 Phase 01: In Phase 01 Only the Memoery is allocated for the variables and functions
2 Phase 02 : In pahse 02 the line by line execution of code is done

In phase 01 the function declaration is stored in the memory with its complete definition
however the variable is stored in the memory with undefined value   
*/

createCourse('dsa');
console.log(a);

function createCourse(coursename)
{
    console.log('creating course: ' + coursename);
};

var a = 10;
console.log(a);