// for double(==) equal == check only value
function check1(first1, secound1) {
    if (first1 == secound1) {
        console.log("condition is true");
    } else {
        console.log("condition is false");
    }
}
check1(2, 3); // condition flase
check1(2, "2") // condition true
check1(1, true); // condition true
check1(0, false); // condition true
check2(2, 2); // condition true


// for triple(===) equal    == type & value check
function check2(first2, secound2) {
    if (first2 === secound2) {
        console.log("condition is true");
    } else {
        console.log("condition is false");
    }
}
check1(2, 3); // condition flase
check2(2, "2") // condition false
check2(1, true); // condition false
check2(0, false); // condition flase
check2(2, 2); // condition true