// ====== Extracting object properties === 

const course ={
    cousrname : "JavaScript",
    price : 999,
    courseInstructor : "Abubakar Orakzai",
} 

const {courseInstructor} = course;
// now when when you want to extract the courseInstructor you does not have to required 
// to write the course.courseInstructor you can directly write courseInstructor and it will give you the value of the
//  courseInstructor property of the course object
console.log(courseInstructor);

const {coursename: name} = course;
console.log(name);

// === Destructuring the object ===
const obj1 = { a, b, c };
const { a, b, c } = obj1;
// Equivalent to:
// const a = obj.a, b = obj.b, c = obj.c;

const obj2 = { prop1: x, prop2: y, prop3: z };
const { prop1: x, prop2: y, prop3: z } = obj2;
// Equivalent to:
// const x = obj.prop1, y = obj.prop2, z = obj.prop3;