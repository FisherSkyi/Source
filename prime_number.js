function P(n) {
    function foo(d) {
        return d <= 1
        ? true
        : (n%d!==0) && foo(d-1);
    }
    return foo(n-1);
}

P(37);