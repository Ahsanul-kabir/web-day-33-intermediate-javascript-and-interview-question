/*
Null means an empty or non-existent value. Null is assigned, and explicitly means nothing.
while undefined typically means a variable has been declared but not defined yet it can comes many ways.
*/

let pakhi; // undefine  --> kono kisu dei ni tai

function add(num1, num2) {
    console.log(num1 + num2);
    return // undefine --> ki return korbo kisu boli nai tai
}

const result = add(10, 20);
console.log(result); // undefine --> kisu return na kore output dek te caitesi


function add(num1, num2) {
    console.log(num1 + num2); // undefine  === num2--> num2 nai ki return korbe sei jonno
}

const result = add(20);
console.log(result); // undefine --> kisu return na kore output dek te caitesi

const premik = { name: "smart dude", phone: 458421 };
console.log(premik.gf); // undefine --> gf premik object er modde nai tai


let fun = undefined;
console.log(fun); // undifine --> bolei disi tai

let ages = [2, 5, 9]
console.log(ages[11]); // undefine --> Array er modde nai tai