// console.log("Hello World!")

// const constVar = "Hi"; // bien hang so, khong the thay doi gia tri
// // constVar = 5; 

// let a = 5;
// a = true;
// console.log(a);

// var b = null;

// console.log(typeof c); // bien chua ton tai: undefined
// console.log(typeof b); // oobject

// let obj = { //const //ben trong them sua xoa gi cx dc, // obj = {} thi k dc
//     name: "Le Thanh Trung",
//     age: 20,
//     obj2: {
//         name: "Nguyen Van A",
//         age: 10,
//     }
// };

// console.log(obj.name);
// // console.log(obj["name"]);

// console.log(obj.age);
// // console.log(obj["age"]);

// console.log(obj.obj2.name);
// // console.log(obj["obj2"]["name"]);

// obj.b = 100;
// console.log(obj);


// delete obj.obj2;
// console.log(obj)

// obj.age = 30;
// console.log(obj);

// //array

// const arr = [1, 23, 43, "Hello"];
// console.log(arr);
// console.log(arr.length);

// arr.pop();
// //afunc -> work

// function aFunc(a, b) { 
//     console.log(a, b);
// }

// //afunc -> work
// aFunc("Hello", 6);

// //bFunc -> doesnt work
// const bFunc = function() { // this tro? ben trong function
//     console.log("B");
// }
// //bFunc() -> work


// const cFunc = () => { // this tro? ben ngoai function
//     console.log("C");
// }
// bFunc()

// console.log("asdasdasdasdasd".toLowerCase());
// console.log((1234.273).toFixed(1));



// //regularException
// console.log(/([A-Z])\w+/g.test('asdasdasd'));
// console.log(/([A-Z])\w+/g.test('Aasdads'));

// throw new Error("This is error");

//Function scope

// var a = 10;
// function print() {
//     var b = 50;

//     function printA() {        
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// print();

// var b = 50;
//     console.log(a);
//     console.log(b);
// //Block scope {  }

// let aBlock = 10;
// function printBlock() {
//     let bBlock = 300;

//     if(true) {
//         let cBlock = 1000; // let gioi han boi block
//         var c = 2332; // var gioi han boi function
//         console.log(cBlock); // 1000
//         console.log(c); // 2332
//     }

//     console.log(aBlock); // 10 
//     console.log(bBlock); // 50
//     console.log(cBlock);

// }


// const countDown = function(count) {
//     for(var i = count; i >= 0; i--) { // let
//         setTimeout(function() {
//           console.log(count--);
//         }, 1000*(count - i)); // cach nhau 1 giay
//     }
// }

// countDown(5);


const print = function(message) {
    console.log(message);
}

const aFunc = function(callback) {
    callback("Hello World!");
}

aFunc(print);

console.log("Start");