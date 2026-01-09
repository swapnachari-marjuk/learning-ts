"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "Ahmad "; //example of implicit typing or Type Inference.
const lastName = "Marjuk"; // example of explicit typing.
// typescript primary types are: string, number, boolian...
// firstName = 3 this will be an error in typescript.
const greets = (name, age) => {
    const greetsSent = `Hello! I'm ${name}. I'm ${age} years old.`;
    return greetsSent;
};
const funCall = greets("Ahmad Marjuk", 23);
console.log(funCall);
// In the case of a function in typescirpt, the data type of the argument must be specified.
// If desired, you can also specify what it will return.
// when a function returning nothing, its type will be `void`. But it can run an operation.
// if it typed `never` it will return nothing and it can't run any operation
// const foods = ["potato", "tomato", "shim", "fish",]
// foods.push(39) when foods is implicitly string typed, you can't push any data accept string.
const foods = ["potato", "tomato", "shim", "fish"];
foods.push(39);
// we can more specify the type of data in array by tuple indexing. Like:
// const randomArr: [string, number, string] = ["random", "array", 30];
// will be error. because we specified the type of index. so, what should be right code!
const randomArr = ["random", "array", 30];
//# sourceMappingURL=index.js.map