const x = 0;
function make_adder(x) {
return y => x + y;
}
make_adder(1)(x); // returns 1
make_adder(3)(x); // returns 3
