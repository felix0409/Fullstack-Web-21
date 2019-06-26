// const trung = (disom) => new Promise((resolve, reject) => {
//     if (disom) resolve("Chuc mung");
//     else reject("lua day :)");
// });

// trung(true)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

function nguday() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("ngu day");
            resolve();
        }, 2000);
    })
}

function danhrang() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("danh rang");
            resolve({ "message": "success" });
        }, 2500);
    })
}

function ruamat() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("rua mat");
        }, 1000);
    })
}

// nguday(function() {
//     danhrang(function() {
//         ruamat();
//     })
// })  callback hell

// nguday()
//     .then(() => {
//         return danhrang();
//     })
//     .then(() => {
//         ruamat();
//     })
//     .catch(() => {
//         console.log(err);
//     });

async function asyncFunc () {
    try {
        await nguday();
        const data = await danhrang();
            console.log(data);
        await ruamat();
    } catch (error) {
        console.log(error);
    }
    
}

asyncFunc();