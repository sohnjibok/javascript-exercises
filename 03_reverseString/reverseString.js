const reverseString = function(string) {
    let word = [...string]
    let wordArray = []
    for(let i = word.length -1; i > -1; i--) {
        wordArray.push(word[i])
    }
    return wordArray.join('')
};

// Do not edit below this line
module.exports = reverseString;
