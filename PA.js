// TASK 1A

// You may write helper functions here.


function split(S) {
    let ans = [];
    for ( let i = 0; char_at(S, i) !== undefined; i = i + 1) {
        ans[i] = char_at(S, i);
    }
    return ans;

}

// TASK 1B

function helper_in (x, arr) {
    for (let i = 0; arr[i] !== undefined; i = i + 1) {
        if(arr[i] === x) {
            return true;
        }
    }
    return false;
}

function num_characters_from(A, B) {
    let count = 0;
    if(is_null(A) || is_null(B)) {
        return 0;
    } else {
        for(let j = 0; A[j] !== undefined; j = j + 1) {
            if (helper_in(A[j], B)) {
                count = count + 1;
            } 
        }
    }
    return count;

}

// TASK 1C

function checker(x, xs) {
    return !is_null(member(x, xs));
}

// true means in, false means not in

function num_unique(A) {
    let count = 0;
    let already_shown = null;
    if(is_null(A)) {
        return 0;
    } else {
        for(let i = 0; A[i] !== undefined; i = i + 1) {
            if (checker(A[i], already_shown)) {
                
            } else {
                already_shown = pair(A[i], already_shown);
                count = count + 1;
            }
        }
    }
    return count;

}

num_unique(["abc", "abc", "abc", "abc"]);
num_unique(["o", "c", "c", "u", "r", "r", "e", "n", "c", "e"]);


// TASK 2A

// You may write helper functions here.


// You are free to modify the following function and use it in your solution.
function search_array(A, x) {
    const len = array_length(A);
    let i = 0;
    while (i < len && A[i] !== x) {
        i = i + 1;
    }
    return i < len ? i : -1;
}


function baseN_to_value(X) {

    const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                           "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                           "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                           "U", "V", "W", "X", "Y", "Z"];

    const base = head(X);
    const value_from = tail(X);
    const len = length(value_from);
    let ans = 0;
    
    for(let i = 0; i < len; i = i + 1) {
        ans = ans + search_array(DIGIT_SYMBOLS, list_ref(value_from, i)) 
        * 
        math_pow(base, (len - i - 1));
    }
    
    return ans;

}

const x = pair(16, list("8", "E", "A", "3", "F"));
baseN_to_value(x); // returns 584255
const y = pair(10, list("6", "9", "3", "2", "1", "1", "1"));
baseN_to_value(y); // returns 6932180

// TASK 2B

function clamp(N, x, i) {
        return math_pow(N, i) <= x && x < math_pow(N, i + 1);
}

function value_to_baseN(N, x) {
    let flag = x%N === 0 ? true : false;
    let max = 0;
    for(let i = 0; x > math_pow(N, i); i = i + 1) {
        if (math_pow(N, i) <= x && x < math_pow(N, i + 1)) {
            max = i;
        }
    }
    display(max);
    let ans = [];
    for(let j = max; j >=0; j = j - 1) {
        ans[j] = x >= math_pow(N, j) ? math_floor(x/math_pow(N,j)) : 0;
        x = x - ans[j] * math_pow(N, j);
    }

    const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                              "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                              "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                              "U", "V", "W", "X", "Y", "Z"];
    let lst = null;
    for(let i = 0; i < array_length(ans); i = i + 1) {
        lst = pair(DIGIT_SYMBOLS[ans[i]], lst);
    }
    return pair(N, lst);
}
// value_to_baseN(16, 584255);
// value_to_baseN(10, 40509);
// value_to_baseN(2, 405);
// clamp(10, 145, 3);
// value_to_baseN(10, 6932180);
// list("1", "1", "0", "0", "1", "0", "1", "0", "1")

// TASK 3A

// You may write helper functions here.


function flatten_bin_tree(T) {
    function helper(T) {
        if (is_null(T)) {
            return null;
        } else if (is_null(list_ref(T, 1)) && is_null(list_ref(T, 2))) {
            return list_ref(T, 0);
        } else if (is_null(list_ref(T, 1)) && !is_null(list_ref(T, 2))) {
            return pair(list_ref(T, 0), helper(list_ref(T, 2)));
        } else if (!is_null(list_ref(T, 1)) && is_null(list_ref(T, 2))) {
            return pair(helper(list_ref(T, 1)), list_ref(T, 0));
        } else {
            return pair(helper(list_ref(T, 1)), pair(list_ref(T, 0), helper(list_ref(T, 2))));
        }
    }
    const raw = helper(T);
    // display(raw);
    function flatten_pairs(xs) {
        if(is_number(xs)) {
            display(xs);
            return list(xs);
        } else if(is_null(xs)) {
            display("null");
            return null;
        } else {
            display("append");
            return append(flatten_pairs(head(xs)), flatten_pairs(tail(xs)));
        }
    }
    return flatten_pairs(raw);
}

const treeA = null;  // empty binary tree

const B5 = list(5, null, null);
const B3 = list(3, null, null);
const treeB = list(2, B5, B3);  // a binary tree with 3 elements

const C5 = list(5, null, null);
const C6 = list(6, null, C5);
const C8 = list(8, null, null);
const C3 = list(3, C8, null);
const treeC = list(4, C6, C3);  // a binary tree with 5 elements

const D1 = list(1, null, null);
const D4 = list(4, null, null);
const D3 = list(3, D1, D4);
const D8 = list(8, null, null);
const D7 = list(7, null, D8);
const treeD = list(5, D3, D7);  // a binary tree with 6 elements


// flatten_bin_tree(treeA);
// returns null
// list_ref(treeB, 0);
// flatten_bin_tree(treeB);
// returns list(5, 2, 3)

flatten_bin_tree(treeC);
// returns list(6, 5, 4, 8, 3)

// flatten_bin_tree(treeD);
// returns list(1, 3, 4, 5, 7, 8)

// TASK 3B

function insert(x, xs) {
    return is_null(xs)
           ? list(x)
           : x <= head(xs)
           ? pair(x, xs)
           : pair(head(xs), insert(x, tail(xs)));
}

function insertion_sort(xs) {
    return is_null(xs)
           ? xs
           : insert(head(xs), insertion_sort(tail(xs)));
}

function list_to_array(L) {
    const A = [];
    let i = 0;
    for (let p = L; !is_null(p); p = tail(p)) {
        A[i] = head(p);
        i = i + 1;
    }
    return A;
}





function make_balanced_BST(L) {

    const sorted_list = insertion_sort(L);
    function helper(xs) {
        if(is_null(xs)) {
            return null;
        } else {
            const middle = list_ref(xs, math_floor(length(xs)/2));
            const smaller = filter(x => x < middle, xs);
            const larger = filter(x => x > middle, xs);
            // const arr_sorted = list_to_array(sorted_list);
            // return arr_sorted;
            if(is_null(smaller) && is_null(larger)) {
                return list(middle, null, null);
            } else if(is_null(smaller) && !is_null(larger)) {
                return list(middle, null, helper(larger));
            } else if(!is_null(smaller) && is_null(larger)) {
                return list(middle, helper(smaller),  null);
            } else {
                return list(middle, helper(smaller), helper(larger));
            }
        }
    }
    return helper(sorted_list);

}


make_balanced_BST(null);
// returns null

make_balanced_BST( list(8) );
// returns list(8, null, null)

make_balanced_BST( list(3, 1, 4, 2) );
// returns list(3, list(2, list(1, null, null), null),
//                 list(4, null, null))

display_list(make_balanced_BST( list(4, 6, 1, 3, 7, 5) ));
// returns list(5, list(3, list(1, null, null), list(4, null, null)),
//                 list(7, list(6, null, null), null))

// TASK 3C

function insert(x, xs) {
    return is_null(xs)
           ? list(x)
           : x <= head(xs)
           ? pair(x, xs)
           : pair(head(xs), insert(x, tail(xs)));
}

function insertion_sort(xs) {
    return is_null(xs)
           ? xs
           : insert(head(xs), insertion_sort(tail(xs)));
}


function bin_tree_to_BST(T) {
    // display_list(T);
    const order = flatten_bin_tree(T);
    const sorted_list = insertion_sort(order);
    // display(order);
    // display(sorted_list);
    const match = [];
    for (let i = 0; i < length(order); i = i + 1) {
        match[list_ref(order, i)-1] = i+1;
    }
    
    // display(match);
    
    function search(T) {
        if(is_null(T)) {
            return null;
        } else if(is_number(T)) {
            return list_ref(sorted_list,match[T-1]-1);
        } else {
            return list(search(list_ref(T, 0)), search(list_ref(T, 1)), search(list_ref(T, 2)));
        }
    }
    
    return search(T);

}

const btreeA = list(2, list(5, null, null), list(3, null, null));
// bin_tree_to_BST(btreeA);
// returns     list(3, list(2, null, null), list(5, null, null));

const btreeB = list(4, list(5, list(6, null, null), list(3, null, null)),
                       list(7, list(1, null, null), null));
// bin_tree_to_BST(btreeB);
// returns     list(5, list(3, list(1, null, null), 
                //////////     list(4, null, null)),
//                     list(7, list(6, null, null), 
//                             null))

const btreeC = list(1, list(5, list(4, list(7, null, null),
                                       list(6, null, null)),
                               list(3, null, null)),
                       list(2, null, null));
// flatten_bin_tree(btreeC);
display_list(bin_tree_to_BST(btreeC));
// returns     list(6, list(4, list(2, list(1, null, null),
//                                     list(3, null, null)),
//                             list(5, null, null)),
//                     list(7, null, null))

function is_pa_word(s) {
    return !is_null(member(s, pa_words));
}

// testing

is_pa_word("exhilarating");   // should return true
is_pa_word("tintinnabulate"); // should return false

function count_matches(char, pos) {
    return length(filter(x => char_at(x, pos) === char, pa_words));
}

// testing

count_matches("q", 2);  // should return 3
count_matches("y", 26); // should return 1
// your helper functions go here

function char_stream(s) {
    function helper(pos) {
        return pair(char_at(s, pos), () =>  helper(pos + 1));
    }
    return helper(0);
}


// testing

const my_stream = char_stream("hello");
stream_ref(my_stream, 4);  // returns "o"
function solve(n, constraints) {
    // const to_be_check = pa_words;
    const check_point = map(x => head(x), constraints);
    const standard = map(x => tail(x), constraints);
    function checker(str) {
        if (equal(map(pos => char_at(str, pos), check_point), standard)
            &&
            string_length(str) === n) {
                return true;
            } else {
                return false;
            }
    }
    return filter(checker, pa_words);
}

// testing

display_list(solve(13, list(pair(2, "s"), pair(4, "u"), pair(7, "e"), pair(9, "u"))));
          // should display list("resourcefully")
          
          
function eval_poly(poly) {
    function helper(poly) {
        if(is_null(poly)) {
            return list(x => 0);
        } else {
            const headterm = head(poly);
            return pair(x => head(headterm) * math_pow(x, tail(headterm))
                            , helper(tail(poly)));
        }
    }
    // return helper(poly);
    return x => accumulate((a,b) => a(x) + b,
                            0,
                            helper(poly));
    

}
const poly = list(pair(2, 0), pair(3, 2), pair(-5, 3), pair(8, 6));
const p = eval_poly(poly);

p(2);  // returns 486 (= 2 + 3*(2)^2 - 5*(2)^3 + 8*(2)^6)

function add_poly(poly1, poly2) {
    if (is_null(poly1)) {

        return poly2;

    } else if (is_null(poly2)) {

        return poly1;

    } else {
        const coeff1 = head(head(poly1));
        const coeff2 = head(head(poly2));
        const exp1 = tail(head(poly1));
        const exp2 = tail(head(poly2));

        if (exp1 === exp2) {

            return coeff1 + coeff2 === 0
            ? add_poly(tail(poly1), tail(poly2))
            : pair(pair(coeff1+coeff2, exp1),
                        add_poly(tail(poly1), tail(poly2)));

        } else if (exp1 < exp2) {
            return pair(head(poly1),
                        add_poly(tail(poly1), poly2));

        } else {

            return pair(head(poly2),
                        add_poly(poly1, tail(poly2)));

        }
    }
}


const poly1 = list(pair(2, 0), pair(3, 2), pair(-5, 3), pair(8, 6));
const poly2 = list(pair(1, 1), pair(4, 2), pair(5, 3), pair(9, 5));
const poly3 = list(pair(1, 1), pair(4, 2), pair(5, 3), pair(9, 5));
const lst = list(poly1,poly2,poly3);
accumulate((x,y)=> add_poly(x,y), null, lst);
// display_list(add_poly(poly1, poly2));
// returns list([2, 0], [1, 1], [7, 2], [9, 5], [8, 6])


// The add_poly function for the preceding task has been
// pre-declared here for you to use in this task.
// Do not declare your own add_poly function.
/*
function add_poly(poly1, poly2) {
    // Pre-declared
}
*/
// function add_poly(poly1, poly2) {
//     if (is_null(poly1)) {

//         return poly2;

//     } else if (is_null(poly2)) {

//         return poly1;

//     } else {
//         const coeff1 = head(head(poly1));
//         const coeff2 = head(head(poly2));
//         const exp1 = tail(head(poly1));
//         const exp2 = tail(head(poly2));

//         if (exp1 === exp2) {

//             return coeff1 + coeff2 === 0
//             ? add_poly(tail(poly1), tail(poly2))
//             : pair(pair(coeff1+coeff2, exp1),
//                         add_poly(tail(poly1), tail(poly2)));

//         } else if (exp1 < exp2) {
//             return pair(head(poly1),
//                         add_poly(tail(poly1), poly2));

//         } else {

//             return pair(head(poly2),
//                         add_poly(poly1, tail(poly2)));

//         }
//     }
// }
// const poly1 = list(pair(2, 0), pair(3, 2));
// const poly2 = list(pair(1, 1), pair(4, 2));
// const poly3 = list(pair(1, 1), pair(4, 2));
// const lst = list(poly1,poly2,poly3);
// display_list(lst);
// display(accumulate((x,y)=> add_poly(x,y), null, lst));

function multiply_poly(poly1, poly2) {
    function helper(poly1, poly2) {
        function times_out(poly1, poly2) {
                const coef = head(head(poly1));
                const pow = tail(head(poly1));
                return map(x => pair(head(x) * coef, tail(x) + pow), 
                    poly2);
        }
        const lst = is_null(poly1) ? null 
        : pair(times_out(poly1, poly2), helper(tail(poly1), poly2));
        return display_list(lst);
    }
    return accumulate((x,y)=> add_poly(x,y), null, helper(poly1, poly2));
    // return accumulate((x,y) => add_poly(x, y), null, all);
    // let ans = null;
    // for(let al = all; !is_null(al); al = tail(al)) {
    //     ans = add_poly(ans, head(al));
    // }
    // return accumulate((x,y)=> add_poly(x,y), null, lst);
}
// accumulate((x,y)=> add_poly(x,y), null, multiply_poly())
const poly5 = list(pair(1, 0), pair(3, 2), pair(5, 3));
const poly4 = list(pair(2, 1), pair(7, 2));
multiply_poly(poly4, poly5);
// add_poly(
//     add_poly(head(multiply_poly(poly1, poly2)), head(tail(multiply_poly(poly1, poly2)))),
//     head(tail(tail(multiply_poly(poly1, poly2)))));
// tail(tail((multiply_poly(poly1, poly2))));

function alt_column_matrix(R, C) {
    const M = [];

    for(let i = 0; i <= R - 1; i = i + 1) {
        M[i] = [];
        M[i][0] = i + 1;
        if (C >= 2) {
            M[i][1] = 2*R - i;
        }
        for(let j = 2; j <= C - 1; j = j + 1) {
            M[i][j] = j % 2 === 0 ? (i+1) + math_ceil((j-1)/2) * 2 * R 
                                    : 2*R-i + math_ceil((j-2)/2) * 2 * R;
        }
    }

    return M;
}
alt_column_matrix(4,1);

function delta_encode(L) {
    function helper(L) {
        const rL = reverse(L);
        return is_null(rL) 
        ? null
        : is_list(rL) && length(rL) === 1
        ? rL
        : pair(delta_encode(reverse(tail(rL))), head(rL) - head(tail((rL))));
    }
    // return helper(L);
    function reverse_back(r_lst) {
        return is_null(r_lst)
        ? null
        : is_list(r_lst)
        ? r_lst
        : append(reverse_back(head(r_lst)), list(tail(r_lst)));
    }
    
    return (reverse_back(helper(L)));
    // return reverse(r);
}

// delta_encode(list(3,4,6,-2,-3));

// reverse(list(1,2,3));

function delta_decode(D) {
    if (is_null(D)){
        return null;
    } else if (length(D) === 1) {
        return D;
    } else {
        let till_now = head(D);
        function helper(D) {
            if(!is_null(D)) {
                till_now = till_now + head(D);
                return pair(till_now, helper(tail(D)));
            } else {
                return null;
            }
        }
        return pair(head(D), helper(tail(D)));
    }
}

// list(3,4,6,-2,-2), 
// delta_decode(list(3,1,2,-8,0));

function runlength_encode(L) {
    if (is_null(L)) {
        return null;
    } else if(length(L) === 1) {
        return L;
    } else {
        let count_consecutive = 0;
        let previous = head(L);
        function helper(L) {
            if (is_null(L)) {
                if(count_consecutive === 1) {
                    return null;
                } else {
                    return list(pair(previous, count_consecutive));
                }
            } else if (head(L) === previous) {
                count_consecutive = count_consecutive + 1;
                return helper(tail(L));
            } else if (head(L) !== previous) {
                if(count_consecutive >= 2) {
                    let Pair = pair(previous , count_consecutive);
                    count_consecutive = 1;
                    previous = head(L);
                    return pair(Pair, helper(tail(L)));
                } else if (count_consecutive === 1) {
                    count_consecutive = 1;
                    let Number = previous;
                    previous = head(L);
                    return pair(Number, helper(tail(L)));
                }
                
            }
        }
        return helper(L);
    }
}

// runlength_encode(null);
// returns null

// runlength_encode(list(9));
// returns list(9)

runlength_encode(list(6,5,5,9,7,7,5,5,5));
// returns list(6, [5,2], 9, [7,2], [5,3])

function runlength_decode(R) {

    const new_R = map(x => is_pair(x) ? x : pair(x, 1), R);
    let arr = [];
    for (let i = 0; i <= length(new_R) - 1; i = i + 1) {
        let count = tail(list_ref(new_R, i));
        let num = head(list_ref(new_R, i));
        arr[i] = build_list(x => num, count);
    }
    let j = -1;
    function helper(Arr) {
        j = j + 1;
        if(j >= array_length(Arr)) {
            return null;
        } else {
            return append(Arr[j], helper(Arr));
        }
    }
    return helper(arr);

}

runlength_decode(list(6, pair(5,2), 9, pair(7,2), pair(5,3)));
// returns list(6,5,5,9,7,7,5,5,5)

// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);


function smallest_bounding_AAR_area(rs) {

    const left = map(get_x, rs);
    // return left;
    const down = map(get_y, rs);
    const right = map(x => get_x(x) + get_width(x), rs);
    const up = map(x => get_y(x) + get_height(x), rs);
    function find_min(xs) {
        let min = head(xs);
        for(let i = 0; i <= length(xs) - 1; i = i + 1) {
            if (list_ref(xs, i) < min) {
                min = list_ref(xs, i);
            }
        }
        return min;
    }
    // return find_min(left);
    function find_max(xs) {
        let max = head(xs);
        for(let i = 0; i <= length(xs) - 1; i = i + 1) {
            if (list_ref(xs, i) > max) {
                max = list_ref(xs, i);
            }
        }
        return max;
    }
    return (find_max(right)- find_min(left)) * (find_max(up) - find_min(down));
}



const aar1 = list(2, 3, 10, 15);
const aar2 = list(1, 4, 20, 8 );
smallest_bounding_AAR_area( list(aar1, aar2) );
// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);


function optimized_smallest_bounding_AAR_area(rs) {

    const width = map(get_width, rs);

    const height = map(get_height, rs);

    let total = append(width, height);
    
    function find_min(xs) {
        let min = head(xs);
        for(let i = 0; i <= length(xs) - 1; i = i + 1) {
            if (list_ref(xs, i) < min) {
                min = list_ref(xs, i);
            }
        }
        return min;
    }

    function find_max(xs) {
        let max = head(xs);
        for(let i = 0; i <= length(xs) - 1; i = i + 1) {
            if (list_ref(xs, i) > max) {
                max = list_ref(xs, i);
            }
        }
        return max;
    }
    const first = find_max(total);
    for(let i = 0; i <= math_floor(length(total)/2); i = i + 1){
        total = remove(find_max(total), total);
    } 
    const second = find_max(total);
    return first * second;

}

// optimized_smallest_bounding_AAR_area(list( list(2, 3, 10, 15), list(1, 4, 20, 8) ));
// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);


function overlap_area(aar1, aar2) {

    function find_min(xs) {
        let min = head(xs);
        for(let i = 0; i <= length(xs) - 1; i = i + 1) {
            if (list_ref(xs, i) < min) {
                min = list_ref(xs, i);
            }
        }
        return min;
    }

    function find_max(xs) {
        let max = head(xs);
        for(let i = 0; i <= length(xs) - 1; i = i + 1) {
            if (list_ref(xs, i) > max) {
                max = list_ref(xs, i);
            }
        }
        return max;
    }
    const left_band = find_max(list(get_x(aar1), get_x(aar2)));
    const right_band = find_min(list(get_x(aar1) + get_width(aar1), 
                                     get_x(aar2) + get_width(aar2)));
    const down = find_max(list(get_y(aar1), get_y(aar2)));
    const up = find_min(list(get_y(aar1) + get_height(aar1), 
                                     get_y(aar2) + get_height(aar2)));
    
    if (get_x(aar1) + get_width(aar1) <= get_x(aar2) 
        ||
        get_x(aar2) + get_width(aar2) <= get_x(aar1)
        || 
        get_y(aar1) + get_height(aar1) <= get_y(aar2)
        ||
        get_y(aar2) + get_height(aar2) <= get_y(aar1)) {
            
        return 0;
    } else {
        return (up - down) * (right_band - left_band);
    }
}
function make_k_list(k, d) {

    return d === 0 
            ? 0
            : d === 1
            ? build_list(x => 0, k)
            : build_list(x => make_k_list(k, d-1), k);

}
function sum_k_list(klist) {

    return is_number(klist)
    ? klist
    : !is_list(head(klist))
    ? accumulate((x,y) => x + y,
                        0,
                        klist)
    : accumulate((x,y) => sum_k_list(x) + sum_k_list(y),
                        0,
                        klist);

}
function map_k_list(f, klist) {

    return is_number(klist)
    ? f(klist)
    : is_number(head(klist))
    ? map(f, klist)
    : map(klist2 => map_k_list(f, klist2), klist);

}
function route_distance(mat, route) {

    return is_null(tail(route))
    ? 0
    : mat[head(route)][head(tail(route))] + route_distance(mat, tail(route));

}
// The route_distance function for the preceding task has been
// pre-declared here for you to use in this task.
// Do not declare your own route_distance function.
/*
function route_distance(mat, route) {
    // Pre-declared
}
*/

function shortest_paper_route(n, mat, start) {

    // You can keep, modify or remove the permutations function.
    function permutations(ys) {
        return is_null(ys)
            ? list(null)
            : accumulate(append, null,
                map(x => map(p => pair(x, p),
                             permutations(remove(x, ys))),
                    ys));
    }

    const m = array_length(mat);
    
    const other_houses = remove(start, build_list(x => x, m));
    
    let round = map(x => append(list(start), x),permutations(other_houses));
    
    let all_routes = map(x => append(x, list(start)),round);
    // return all_routes;
    let shortest = route_distance(mat, head(all_routes));
    
    let route_now = head(all_routes);
    
    for (all_routes; !is_null(all_routes); all_routes = tail(all_routes)) {
        if (route_distance(mat, head(all_routes)) < shortest) {
            shortest = route_distance(mat, head(all_routes));
            route_now = head(all_routes);
        } else {}
    }
    
    return pair(route_now, shortest);

}

const mat = [[0, 1, 2, 3],
             [2, 0, 5, 6],
             [3, 3, 0, 4],
             [4, 4, 5, 0]];
const n = array_length(mat);
shortest_paper_route(n, mat, 1);
    // returns pair(list(1, 0, 2, 3, 1), 12)
function make_postfix_exp(bae) {
    if(is_number(bae)) {
        return [bae];
    } else {
    function helper(bae) {
        return is_number(bae[0]) && is_number(bae[2])
        ? [bae[0], bae[2], bae[1]]
        : !is_array(bae[0])

        ? [bae[0], make_postfix_exp(bae[2]), (bae[1])]
        : !is_array(bae[2])
        ? [make_postfix_exp(bae[0]), bae[2], bae[1]]
        : [make_postfix_exp(bae[0]), make_postfix_exp(bae[2]), bae[1]];
    }
    let raw = helper(bae);
    let arr = [];
    function flatten_array(arr) {
        if(is_array(arr[0])) {
            let check = false;
            for(let i = 0; i < array_length(arr[0]);i = i + 1) {
                if (is_array(arr[0][i])) {
                    check = true;
                }
            }
            const first_part = check === true ? flatten_array(arr[0]) : arr[0];
            let len_first = array_length(first_part);
            if(is_array(arr[1])) {
                const second_part = flatten_array(arr[1]);
                
                for(let i = len_first; i <= len_first + array_length(second_part)-1; i = i + 1) {
                    first_part[i] = second_part[i-len_first];
                    first_part[len_first + array_length(second_part)] = arr[2];
                }
                return first_part;
            } else {
                first_part[len_first] = arr[1];
                first_part[len_first + 1] = arr[2];
                return first_part;
            }
            
        } else {
            const first_part = [arr[0]];
            if(is_array(arr[1])) {
                const second_part = flatten_array(arr[1]);
                
                for(let i = 1; i <= array_length(second_part) ; i = i + 1) {
                    first_part[i] = second_part[i-1];
                    first_part[1 + array_length(second_part)] = arr[2];
                }
                return first_part;
            } else {
                first_part[1] = arr[1];
                first_part[2] = arr[2];
                return first_part;
            }
        }
    }
    display(raw);
    return flatten_array(raw);
    }
}



// const bae = [ [7, "-", 2], "*", [7, "+", 3] ];
// // const bae = [ [8, "-", 2], "*", [7, "+", 3] ];
// make_postfix_exp(bae);  // returns [8, 2, "-", 7, 3, "+", "*"]



make_postfix_exp([[[30, "/", 3], "-", 1], "*", [4, "+", 6]]);
function eval_postfix_exp(pfe) {
    function helper(pfe) {
        for(let i = 0; i <= array_length(pfe); i = i + 1) {
            if (pfe[i] === "+") {
                let first_operand = pfe[i-2];
                let second_operand = pfe[i-1];
                let ans = first_operand + second_operand;
                let new_pfe = [];
                // new_pfe[i-2] = ans;
                for (let j = 0; j <= array_length(pfe) - 3; j = j + 1) {
                    if(j < i - 2) {
                        new_pfe[j] = pfe[j];
                    } else if(j === i - 2 ) {
                        new_pfe[j] = ans;
                    } else {
                        new_pfe[j] = pfe[j + 2];
                    }
                } 
                display(new_pfe);
                return(new_pfe);
                break;
            } else if (pfe[i] === "-")  {
                let first_operand = pfe[i-2];
                let second_operand = pfe[i-1];
                let ans = first_operand - second_operand;
                let new_pfe = [];
                // new_pfe[i-2] = ans;
                for (let j = 0; j <= array_length(pfe) - 3; j = j + 1) {
                    if(j < i - 2) {
                        new_pfe[j] = pfe[j];
                    } else if(j === i - 2 ) {
                        new_pfe[j] = ans;
                    } else {
                        new_pfe[j] = pfe[j + 2];
                    }
                } 
                display(new_pfe);
                return(new_pfe);
                break;
            } else if (pfe[i] === "*")  {
                let first_operand = pfe[i-2];
                let second_operand = pfe[i-1];
                let ans = first_operand * second_operand;
                let new_pfe = [];
                // new_pfe[i-2] = ans;
                for (let j = 0; j <= array_length(pfe) - 3; j = j + 1) {
                    if(j < i - 2) {
                        new_pfe[j] = pfe[j];
                    } else if(j === i - 2 ) {
                        new_pfe[j] = ans;
                    } else {
                        new_pfe[j] = pfe[j + 2];
                    }
                } 
                display(new_pfe);
                return(new_pfe);
                break;
            } else if (pfe[i] === "/")  {
                let first_operand = pfe[i-2];
                let second_operand = pfe[i-1];
                let ans = first_operand / second_operand;
                let new_pfe = [];
                // new_pfe[i-2] = ans;
                for (let j = 0; j <= array_length(pfe) - 3; j = j + 1) {
                    if(j < i - 2) {
                        new_pfe[j] = pfe[j];
                    } else if(j === i - 2 ) {
                        new_pfe[j] = ans;
                    } else {
                        new_pfe[j] = pfe[j + 2];
                    }
                } 
                display(new_pfe);
                return new_pfe;
                break;
            } 
        }
    }
    return (array_length(pfe) === 1) ? pfe[0] : eval_postfix_exp(helper(pfe));
}

const pfe = [8, 2, "-", 7, 3, "+", "*"];
eval_postfix_exp(pfe);  // returns 60