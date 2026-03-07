// ====== Extracting object properties === 

const course ={
    cousrname : "JavaScript",
    price : 999,
    courseInstructor : "Abubakar Orakzai",
} 

const {courseInstructor} = course;
// now when when you want to extract the courseInstructor you does not have to required to write the course.courseInstructor you can directly write courseInstructor and it will give you the value of the courseInstructor property of the course object
console.log(courseInstructor);
