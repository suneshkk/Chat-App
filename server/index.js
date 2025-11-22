import express, { Router } from "express";
import { connectDB } from "./db.js";
const app = express();
const port = 4000;
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// let fruitsData = () => {
//   const fruits = ["banann", "apple", "orange"];
//   fruits.shift;
//   // console.log( fruits.shift());
//   return (fruits)
// };
// fruitsData()
// function data(){
// console.log("common function");  
// }
// data()
// const data1 = function(){
//   console.log("function expression");
// }
// data1()
// const data2 = ()=>{
//   console.log("arrow function");
// }
// data2()

// call back function


// function greet(){
//   console.log( "hello sunesh")
// }
// function callMe(callBack){
// console.log("i am caling the call back now with call back function")
// callBack();
// }
// callMe(greet);

// const functionSum= ()=>{
//   let a=10;
//   let b=10;
//   let totalSum =a+b;
//   return totalSum;
// }
// const result = (resultData)=>{
//   const value = resultData() 
//   console.log("the total sum is :",value);
// }
// result(functionSum)

function test(){
  console.log(this);
}
test();