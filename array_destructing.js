function calculate(a,b)
{
    const add = a+b;
    const subtract = a-b;
    const multiply = a*b;
    const divide = a/b;
    return [add , subtract, multiply, divide];
}

const [add ,sub, mul, div]= calculate(2,3)

console.log(add)



const obj1 ={
    name : " Abubakar Orakzai",
    Degree: "Bachalor of Compputer Science",
};

const obj2 = {
    City : "Lahore",
    Email : "abubakarorakzai15@gmail.com",
};

const obj3 = {...obj1,...obj2};

console.log(obj3);