/*
Closure == kono ekta function theke jdi onno ekta function call / return kori
tahole seta ekta close environmnent create kore seitai Closure and nijera external variable ke reference rekhe dibe
*/

function stopWatch() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log('----------');
console.log(clock1);
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log('----------');
const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log('----------');
console.log(clock1());
console.log('----------');
console.log(clock2());