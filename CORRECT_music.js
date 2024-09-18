function play_matrix(duration, list_of_sounds) {
    const matrix = get_matrix();
    function helper(column, delay) {
        function helper2(row, now_sound2) {
            return row === 16
            ? now_sound2
            : list_ref(list_ref(matrix, row), column)
            ? helper2(row + 1, append(
                now_sound2, 
                list(list_ref(list_of_sounds, row))))
            : helper2(row + 1, now_sound2);
        }
        if(column === 16) {
            return set_timeout(() => helper(0, 0), delay * 1000);
        }
        else {
            set_timeout(() => play(
                simultaneously(helper2(0, list(silence_sound(0))))), 
                delay * 1000);
            return helper(column + 1, delay + duration);
        }
    }
    return helper(0, 0);
}