let words = 'Привет, мир!';


function revers(srt) {
    let line = '', i;
    for (i = srt.length - 1; i >= 0; i--) {
        line += srt[i];
    }
    return line;
}


console.log(revers(words));



