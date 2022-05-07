const sumAll = function(num1, num2) {
    if(typeof num1 !== 'number' 
    || typeof num2 !== 'number') {
        return "ERROR"
    }
    let numA;
    let numB;

    if(num1 < num2) {
        numA = num1
        numB = num2
    } else {
        numA = num2
        numB = num1
    }

    let sum = 0
    
    for(let i = numA; i < numB + 1; i++){
        sum += i
    }

    return (sum >= 0) ? sum : "ERROR"

};

// Do not edit below this line
module.exports = sumAll;
