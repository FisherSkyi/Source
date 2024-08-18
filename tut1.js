function biggie_size(regular_combo){
    return regular_combo + 4;
}

function unbiggie_size(biggie_size_vision){
    return biggie_size_vision - 4;
}

function is_biggie_size(combo){
    return combo >=5 ? true 
    : false;
}

function combo_prize(combo){
    return combo >=5 ? (((combo - 4) * 1.17) + 1.5) 
    : (combo * 1.17);
}

function empty_order(){
    return 0;
}

function add_to_order(order, combo){
    return order * 10 + combo;
}

function last_combo(order){
    return order % 10;
}

function f(order){
    return order - last_combo(order);
}
