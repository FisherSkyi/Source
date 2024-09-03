import {heart, stack_frac, show,nova,beside,stack} from "rune";

// function stackn(rune, n) {
//     return n===1
//     ? rune
//     : stack_frac((1-1/n), stackn(rune, n-1), rune);
    
// }

// show(stackn(heart, 5));

// function ch_stackn(n, rune1,rune2) {
//     return n===1
//     ? n % 2 === 1
//         ? rune1
//         : rune2
//     : n%2===1
//         ? stack_frac(1-1/n, ch_stackn(n-1,rune1,rune2), rune1)
//         : stack_frac(1-1/n, ch_stackn(n-1,rune1,rune2), rune2);
// }

// show(ch_stackn(9,heart,nova));



function f(n,rune) {
    function g(n) {
        return n === 1
        ? rune
        : beside(rune, stack(g(n-1), g(n-1)));
    } 
    function h(n) {
        return n === 1
        ? rune
        : stack(beside(h(n-1), h(n-1)), rune);
    }
    return n === 1
    ? stack(beside(h(1), rune), beside(rune, g(1)))
    : stack(beside(h(n), f(n-1,rune)), beside(rune, g(n)));
    
}

show(f(6,heart));



// function g(n,rune) {
//         return n===1
//         ?rune
//         :beside(rune, stack(g(n-1,rune), g(n-1,rune)));
//     }  
    
// g(3,heart);