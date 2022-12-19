let display = () => {
    console.log("Hello World");
}

let display2 = (name) => {
    console.log(`Hello ${name}`);
}

let display3 = (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old`);
}

let dontDisplay = () => {
    console.log("This function is not exported");
}

module.exports = { display, display2, display3 };