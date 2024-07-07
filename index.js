
// // function invoke/call

// run();

// // function declaration
// function run(){
//    console.log("running");
// }

// // named function assignment
// let stand = function walk(){
//    console.log("walking");
// };


// // anonymous function assignment
// let stand2 = function(){
//    console.log("walking anonymous function assignment");
// };

// stand();

// let jump=stand;
// jump();

// stand2();

// function sum(a,b){
//    // console.log(arguments);
//    let total =0;
//    for(let value of arguments)
//       total=total+value;
//    return total;
// }
// let ans = sum(2,3,4,5,6);
// console.log(ans);


// Rest operator => spread operator
// function sum (num,value, ...args){
//    console.log(args);
// }
// sum(1,2,3,4,5,6,7,8);

// // default parameter
// function interest(p,r=6,y=10){
//    return p*r*y/100;
// }

// console.log(interest(1000,5,10));

// let person = {
//    fName : 'Mr.',
//    lName : 'BlackSmith',

//    get fullName(){
//       return `${person.fName} ${person.lName}`;
//    },

//    set fullName(value){

//       if(typeof value !== String){
//          throw new Error('You have not sent string');
//       }

//       let parts = value.split(' ');
//       this.fName = parts[0];
//       this.lName = parts[1];
//    }
// };
// // console.log(person.fullName);
// // person.fullName = 'Black Smith';
// try{
//    person.fullName = true;
// }
// catch(e){
//    alert(e);
// }
// console.log(person.fullName);


// function fullName(){
//    return `${person.fName}${person.lName}`
// }
// console.log(fullName());

// scope => Global/Local variable

let arr = [1,2,3,4];
// let total = 0;

// for(let value of arr)
//    total = total+value;
// console.log(total);

totalSum = arr.reduce((accumulator,currentValue) => accumulator+currentValue,0);
console.log('Printing Total Sum : ');
console.log(totalSum);

const number1 = [5, 3, 8, 1, 2];
number1.sort((a, b) => a - b);
console.log(number1); // Output: [1, 2, 3, 5, 8]

const number2 = [5, 3, 8, 1, 2];
number2.sort((a, b) => b - a);
console.log(number2); // Output: [8, 5, 3, 2, 1]

