// var ==== jodi var use kori eka scope er modde na theke full function e use kora jai

// Hostion === holo oi socpe er bahire giye oi scope er parent er sope er modde niye nibe == hoestion 'var' e kore and "let, const" kore na
// kono kisu declar korle parent scope e niye nibe


//let, const ==== scope variable
/* let, const ==== jodi kono kisu ke  --> let, const-< hisabe declar korle ar
seta jdi {} er bitore thake seta {} er bahire use korte caile error pabo = oi varible local hisabe kaj korbe */

let bonous;

function sum(first, secound) {
    let result = first + secound + bonus; // bonus = global scope
    console.log(result);
    return result;

    if (result > 9) {
        // var mood = "happy";
        let mood = "happy";
        mood = "fishy";
        mood = 'funky';
        mood = "cranky"
            //console.log(mood);  --> no error (const, let)
    }
    //console.log(mood);  --> error (const, let)

    //console.log(mood);  --> no error ( var )


    //var
    // console.log(day);  == undefine asbe but error dibe nah
    // var day = "friday";  // undefine asbe coz, day er declaration ta upore jbe but  value set ta ei line ei hobe
    // console.log(day);  == undefine asbe nah


    //let
    // console.log(day);  == error asbe
    // let day = "friday";  // error asbe coz, day er declaration ta upore jbe but  value set ta ei line ei hobe
    // console.log(day);  == error asbe nah
}

const output = sum(3, 7);
// console.log(result);  --> will give error == result is local scope
console.log(output);