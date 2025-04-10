const { func } = require("joi");
function asyn() {
  console.log("Hello");
}
setTimeout(asyn, 2000);
console.log("This is befor hello");
setTimeout(() => {
  console.log("Using arrow function ");
}, 4000);
console.log("This is after  arrow function");

//In this the log statments will run first all of the log statments and then the settimeout will run as it is call as the async function --->which mean if the task is require the time the other task will runs un repect of the order in which they are written

// Callbacks => function passed as arguments to another function

// function asyn(){
//     console.log("Hello");
// }
// setTimeout(asyn,2000)

//Like this only asyn is passed as an argument to setTimeout
function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, operation) {
  operation(a, b);
}
calculator(5, 3, sum);
calculator(5, 3, (a, b) => {
  console.log(a * b);
});
//
// ----------------------
function arrows(a, b, func) {
  func(a, b);
}
arrows(2, 2, (a, b) => {
  console.log(a * b);
});

//Callback Hell(pramid of doom) => nested callbacks
function getData(dataId, getNext) {
  setTimeout(() => {
    console.log("data :", dataId);
    if (getNext) {
      getNext();
    }
  }, 2000);
}
getData(1, () => {
  getData(2);
});

// 1.This will print 1 then after 2 second 2

//To solve this we use promises
//promises are the objects
// A Promise is a proxy for a value not necessarily known when the promise is created.

//ye ek object jisa he jo for a instance ek  proxy value deta he jo ki eventauly true be ho sakti he and false be
// Promise ek JavaScript object hai jo ek asynchronous operation ko represent karta hai. Yeh object kisi future value ko hold karta hai, jo eventually resolved (true/success) ya rejected (false/error) ho sakti hai. Jab Promise complete hota hai, tab wo value return karta hai.
// Async - Await 
// uses with a function and asyn function return promise always
// async function H(){
//     console.log("Return a promse")
// }
// H()