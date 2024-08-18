function biggie_size(regular_combo){
    return biggie_size_vision = 
    regular_combo + 4;
}

function unbiggie_size(biggie_size_vision){
    return non_biggie_size_vision = 
    biggie_size_vision - 4;
}

function is_biggie_size(combo){
    return combo >=5 ? true : false;
}

function combo_prize(combo){
    return combo >=5 ? (combo - 4) * 1.17) + 1.5) 
    : (combo * 1.17);
}

