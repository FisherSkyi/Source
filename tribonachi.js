// "tribonacci" numbers, see 
// https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Tribonacci_numbers
//
// here is the naive algorithm, of course very bad, 
// due to its unnecessarily exponential runtime
function trib(n) {
    return n === 0 
           ? 0
           : n === 1
           ? 1
           : n === 2 
           ? 1
           : trib(n - 1) + trib(n - 2) + trib(n - 3);
}

// a version that uses memoization to reduce the
// runtime to grow linearly with the argument n
const mem = [];

function mtrib(n) {
    if (mem[n] !== undefined) {
        return mem[n];
    } else {
        const result = 
            n === 0 ? 0
            : n === 1 ? 1
            : n === 2 ? 1
            : mtrib(n-1) + mtrib(n-2) + mtrib(n-3);
        mem[n] = result;
        return result;
    }
}

// trib(22);
// trib(23);
mtrib(23);
mtrib(100);
