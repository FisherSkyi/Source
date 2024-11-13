// sorting algorithm

// selection sort
// on array
function selection_sort(A) {
    const len = array_length(A);

    for (let i = 0; i < len - 1; i = i + 1) {
        let min_pos = find_min_pos(A, i, len - 1);
        swap(A, i, min_pos);
    }
}

function find_min_pos(A, low, high) {
    let min_pos = low;
    for (let j = low + 1; j <= high; j = j + 1) {
        if (A[j] < A[min_pos]) {
            min_pos = j;
        }
    }
    return min_pos;
}

function swap(A, x, y) {
    const temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

const A = [3, 9, 2, 1, 6, 5, 3, 8];
// selection_sort(A);
A;

// insertion sort
function insertion_sort(A) {
    const len = array_length(A);
    for (let i = 1; i < len; i = i + 1) {
        let j = i;
        for(j; j >= 1; j = j - 1) {
            if(A[j-1] > A[j]) {
                swap(A, j, j-1); 
            }
        }
    }
    return A;
}
// const A = [3, 9, 2, 1, 6, 5, 3, 8];
insertion_sort(A);
A;