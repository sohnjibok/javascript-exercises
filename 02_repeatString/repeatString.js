const repeatString = function(string, number) {
    let word = ''
    for(let i = 0; i < number; i++){
        word = word.concat(string)
    }
    return word
};

// Do not edit below this line
module.exports = repeatString;
