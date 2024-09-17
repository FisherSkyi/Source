function merge(a, b) {
    return is_null(a)
    ? b
    : is_null(b)
    ? a
    : head(a) >= head(b) 
    ? pair(head(b), merge(a, tail(b)))
    : pair(head(a), merge(tail(a), b));
}

merge(list(2,3,6), list(1,4,5));