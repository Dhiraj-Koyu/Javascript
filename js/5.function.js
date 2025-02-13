// function are the building block of applications

//How it works ?

//function takes input, uses logic and returns output
//function must do only 1 task

//ES5
//Syntax function <functionName>(input){
//input
//return output
//}

//write a function to add two number

// function sum(num1,num2){
//     const result=num1+num2;
//     return result;
// }
//Input data
// const value1=+prompt("Enter First number");
// const value2=+prompt("Enter second number");
// const answer=sum(value1,value2);
// alert(answer);

//DRY
// console.log(sum(1,0));
// console.log(sum(1,0));
// console.log(sum(5,8));
// console.log(sum(9,-7));
// console.log(sum(7,5));

//Write a function to calculate the area of circle
function area(radius) {
  return 3.14 * +radius * +radius;
}
const radius = +prompt("what is the radius");
console.log(area(radius));

/*
1. Arrow function
2. Default Function
3. Parameterized function
4. Call back function
5. closure
6. IIFEs
7. Explicit and implicit
8. Anonymous function
9. Inline function
