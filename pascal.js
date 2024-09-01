function pascal(row, position) {
    return row === 0 || position === 0 || position === row
        ? 1
        : pascal(row-1, position-1) + pascal(row-1, position);
}

pascal(4,2);
