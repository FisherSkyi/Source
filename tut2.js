import {
    square, blank, heart, 
    beside, stack, show
} from "rune";

function f1(rune1, n, rune2) {
    return n === 0 
           ? rune2 
           : f1(rune1, n-1, beside(rune1, stack(blank, rune2)));
}

show(f1(square, 3, heart));

function f2(rune, n) {
    return n === 0
           ? rune
           : stack(beside((blank), f2(rune, n-1)), square);
}

show(f2(heart, 3));