/*
Falsy = false, 0, "", udenfined, null, NaN,
*/

/*
Truthy = true, '0', ' ', [], {}
*/

function check(value) {
    if (value || value == 0) {
        console.log('condition is true');
    } else {
        console.log('condition is false');
    }
}

// age > 0 na dile:::
// * age = 0 baki sob value er jonno true hobe... negative hoileo
const age = 2;
check(age);


// str > 0 (length) na dile:::
// * str = EMPTY bade sob value er jonno true hobe... ekta whitespace hoileo
const str = "hello";
check(str);


// kono kisur value ----> undefine,null,NaN <------hole Javascript seta ke false dore nibe
let str1; // let str1 = "null";
console.log(str1);
check(str1);