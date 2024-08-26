// Studio 3 in class sheet HII

import {circle, square, ribbon, blank, stack, beside, show, stack_frac, beside_frac } from 'rune';

function moony_1(rune) {
    return beside(stack(circle, square),
                  stack(blank, rune));
}

// show(moony_1(ribbon));

function moony_2(n) {
    return n === 1
           ? circle
           : moony_1(moony_2(n - 1));
}

// show(moony_2(3));

// show(moony_2(6));

function moony_3(n) {
    return n === 1
       ? circle
       : beside(stack_frac(1/n, circle, square),
                stack_frac(1/n, blank, moony_3(n-1)));
}


// show(moony_3(6));

// function moony(n) {
//     return n === 1
//       ? circle
//       : beside_frac(1/n, stack_frac(1/n, circle, square),
//                           stack_frac(1/n, blank, moony(n-1)));
// }

function helper_2(n, iter, rune) {
    
    const curr = beside_frac(1/(n - iter), 
                        stack_frac(1/(n - iter), circle, square), 
                        stack_frac(1/(n - iter), blank, rune));
    show(curr);
    return iter === 0 ?
                    curr :
                    helper_2(n, iter - 1, curr);
}
function moony_s(n) {
    return helper_2(n, n-1, circle);
}

// show({
//   const curr = ciecle;
//   show(curr);
//   return helper_2(6, 4, circle);
// });
show(moony_s(6));