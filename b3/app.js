// console.log("Hello World");

// const obj = {
//     name: "Le Thanh Trung",
//     age: 20,
// }

// const jsonObj = JSON.stringify(obj); // convert obj, array => json/string

// console.log(jsonObj + "");

// console.log("Start");

// require("fs").writeFile(
//     'test.txt',
//     jsonObj,
//     function(error) {
//         if (error) console.log(error);
//         else console.log("Write File done!"); // callback chay sau cung
//     }); // su dung thu vien

// console.log("End");

const fs = require('fs');
// fs.readFile('fs');


////////////////////////////////// bat dong bo
// console.log("begin");
// require('fs').readFile(
//     'test.txt',
//     { encodeing: 'utf-8' }, 
//     function(error, data) {
//         if (error) console.log(error)
//         else console.log(data);
// })
// console.log("End");



////////////////////////////////// dong bo
console.log("Begin");
const data = fs.readFileSync("test.txt", { encoding: 'utf-8'});

try {
    console.log(JSON.parse(data).name); // json.parse() >< json.stringtify()
} catch (error) {
    console.log(error);
}

console.log("End");