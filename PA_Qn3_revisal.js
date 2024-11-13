// Enter your FULL NAME and NUSNET ID (eXXXXXXX) here:
// * FULL NAME:
// * NUSNET ID:

// TASK 1C

// You may write helper functions here.

function build_code_tree(code_table) {
    let code_table0 = pair([], []);
    let code_table1 = pair([], []);
    const alp = head(code_table);
    const cod = tail(code_table);
    if(array_length(head(code_table)) === 0 && array_length(tail(code_table)) === 0) {
        display("%%%&&&");
        return null;
    } else if(array_length((cod)) === 1 && is_null(cod[0])) {
        display(stringify(alp[0]) + "***");
        return pair(alp[0], alp[0]);
    } else {
        for(let i = 0; i < array_length(cod) ; i = i + 1) {
            if(head(cod[i]) === 0) {
                head(code_table0)[array_length(head(code_table0))] = alp[i];
                tail(code_table0)[array_length(tail(code_table0))] = tail(cod[i]);
                
            } else {
                head(code_table1)[array_length(head(code_table1))] = alp[i];
                tail(code_table1)[array_length(tail(code_table1))] = tail(cod[i]);
            }
        }
        display_list(code_table0);
        display_list(code_table1);
        return pair(build_code_tree(code_table0), build_code_tree(code_table1));
    
    }
}

const alphabet = ["a", "k", "e", "t", "b"];
const codewords = [list(0, 0),    // "a"
                   list(1, 0, 1), // "k"
                   list(0, 1),    // "e"
                   list(1, 1, 0), // "t"
                   list(1, 0, 0)  // "b"
                  ];
const example_codetable = pair(alphabet, codewords);

draw_data(build_code_tree(example_codetable));
// returns [[["a", "a"], ["e", "e"]],
//          [[["b", "b"], ["k", "k"]], [["t", "t"], null]]]