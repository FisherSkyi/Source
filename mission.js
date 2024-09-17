const drum_envelope = adsr(0.05, 0.95, 0, 0);

function snare_drum(note, duration) {
    return drum_envelope(noise_sound(duration));
}

function mute(note, duration) {
    return silence_sound(duration);
}

// function simplify_rhythm(rhythm) {
//         function append_times(lst, n) {
//             return n === 1 ? lst : append(lst, append_times(lst, n-1));
//         }
//     return is_list(rhythm)
//             ? is_null(rhythm)
//             ? null
//             : append(simplify_rhythm(head(rhythm)), simplify_rhythm(tail(rhythm)))
//             : is_pair(rhythm)
//             ? append_times(simplify_rhythm(head(rhythm)),tail(rhythm))
//             : is_number(rhythm)
//             ? list(rhythm)
//             : null;
// }

function percussions(distance, list_of_sounds, rhythm) {
    
    function get_sound(lst, n) {
        return n > length(lst)
                ? null
                : n === 0
                ? head(lst)
                : get_sound(tail(lst), n-1);
    }
    function together_sound(location) {
        
        function find(loc,lst) {
            return loc > length(lst)
            ? null
            : loc === 1
            ? head(lst)
            : find(loc - 1, tail(lst));
        }
        
        const n = find(location, rhythm);//number location = 1, n = 1
        
        function connect_sound(location, n) {
            return location === 1
                    ? pair(get_sound(list_of_sounds, n), null)// n+1 = 2
                    : pair(silence_sound(distance), connect_sound(location - 1, n));
        }
        
        const con_sound = (location, n) => consecutively(connect_sound(location, n));
        
        return location === length(rhythm)
                    ? pair(con_sound(location, n), null)
                    : pair(con_sound(location, n), together_sound(location + 1));
    }
    return simultaneously(together_sound(1));
}

// Test
const my_mute_sound = mute(50, 0.7);
const my_snare_drum = snare_drum(50, 0.7);
const my_cello = cello(50, 0.7);
const my_bell = bell(72, 1);
play(percussions(0.5,
         list(my_mute_sound,
              my_snare_drum,
              my_cello,
              my_bell),
         list(1,2,1,0,3,1,0)));//cello,bell,cello,sn 2,3,2,1
                                //sn, cello, sn     1,2,1