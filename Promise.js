import pkg from 'joi';
const { func } = pkg;

let promise = new Promise((res,rej)=>{console.log("I am inside the promise ");
    rej("Ans has been rejected")
    res("Ans has been accpeted ")
})

promise
    .then((data) => {
        console.log("Promise resolved with:", data);
    })
    .catch((err) => {
        console.log("Promise rejected with:", err);
    });
//In this the reject and the received are the callback which are proived by the js itself

//WHERE WE USE PROMISES
//Genrally when we have to wait for the task to be done 
//  for example when we make a api call it take some time to get and bring the  data  so there we use 
// logic of the api promise 

function API(){ //just bring the api 
     return new Promise((resolve, reject) => {
        //inside this we have any logic 
        console.log("I will bring and then run the api ")
        //or 
        setTimeout(() => {
            console.log("I will bring and then run the settimeout ")
        }, 20000);
        //Always call resolve() or reject() inside a Promise to ensure it settles.
        resolve("Done")
    })
}
let print = API()

// -------------------------------------

function getapi(){
    return new Promise((y,n)=>{
        y("Done dana dan")
        console.log("First Time Waiting");
        setTimeout(() => {
            n("No no no ")
            console.log("final op");
        }, 5000);
        
    })
}
// Even after fixing that — you resolve the promise immediately with y("Done dana dan"), so it’s already "settled". Then later you try to reject it using n("No no no"), but in JavaScript:
// ❗ A promise can only be settled (resolved or rejected) once — after that, any other call to resolve or reject is ignored.
// So what happens here?
// y("Done dana dan") runs → the promise is resolved.
// 5 seconds later, n("No no no") runs → but since the promise is already resolved, this is ignored.
// console.log("final op") still runs though, because it’s just a normal function call.

//TO USE THE PROMISES
//when succes or fullfilled ----> .then(()=>{})
//when not ----> ,catch(()=>{})

const handle_api = ()=>{ //ye function he jo puri api ko manage kare ga 
    return new Promise((correct,wrong)=>{ //since the Promise is an object so we use NEW
        //yaha par jo be function ho ga wo pi kare ga maens jo main coder ho ga wo 
        //yaha se response ya reject milil ga jo be ho ga wo console par jaye ga 
        correct("This will be sahi")

        console.log(correct); // --->NTG WILL HAPPEN 
        // **IMPORTANT POINT **//
        // correct is a function (specifically, it's the resolve function from the Promise).
        // So when you do console.log(correct), it just prints the function definition, not the value you're trying to pass.


        wrong("This will be galt")
    })
}
//yaha par api ka sara kaam hua ab ham isko handle kare ge 
let handling_api = handle_api()
//.then se ---> jab api shi kaam kare ge
handling_api.then((data)=>{
    console.log("In this the api is getteg and response is :",data);
})


//Promise chaining
const handler = ()=>{
    return new Promise((state1,state2)=>{
        setTimeout(()=>{
            console.log("Inside the time out");
            state1("resolved")
        },2000)
    })
}
console.log("Fecthing data1 ...");

const handler2 = ()=>{
    return new Promise((state1,state2)=>{
        setTimeout(()=>{
            console.log("Inside the time out2");
            state1("resolved2")
        },2000)
    })
}
console.log("Fecthing data2 ...");

let ob1 = handler()
ob1.then((data)=>{
    console.log("The response we get is:",data);
})

let ob2 = handler2()
ob1.then((data2)=>{
    console.log("The response we get is:",data2);
    
})

///This is call promise chain ---> then ke ander then 

// Async-Await
// 1. Use with function
// 2. Return a promise 

//Next in async_main.js