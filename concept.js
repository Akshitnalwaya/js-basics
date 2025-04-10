// Lenght of function 
function give(a,b,c){
    console.log(give.length);
}
give(); 
//The parameter which we pass are the Lenght
    //The length property of a JavaScript function returns the number of expected parameters (i.e., formal parameters declared in the function definition), not the number of arguments passed when the function is called.
    // --------------------------------------------
    // two ways to use 
    // function declaration or a function expression
    // 1=> function declaration 
function  declaration(){
    return " function declaration"
}
// and this will only evoke when a functioncall is made 
declaration()
//This will show in browser 
    // 2=> function expression
const expression =function expression(){return "function expression"}
let z = expression
console.log(z);
z = expression()
console.log(z);
// let z = expression; → You're pointing to the vending machine.
// let z = expression(); → You're using the machine to get the snack.

