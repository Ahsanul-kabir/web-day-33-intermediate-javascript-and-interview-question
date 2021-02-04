const numbers = [3, 4, 5, 6, 7, 8];

//const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square (element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result =  numbers.map(function(element){
//     return element * element;
// });


// map, filter ,find ei gula te Loop use kora lage nah ... use na korei kaj kora jai

const result = numbers.map(x => x * x);
console.log(result);


const bigger = numbers.filter(x => x < 3); // give all match element and if not found this will give empty array = []
console.log(bigger);

const isThere = numbers.find(x => x > 5); // give only one match element
console.log(isThere);