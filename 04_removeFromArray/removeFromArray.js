const removeFromArray = function(arr, ...num) {
    let finalArray = []
    for(let i = 0; i < arr.length; i++) {
        if(num.includes(arr[i])) continue
        finalArray.push(arr[i])
    }
    return finalArray
};

// Do not edit below this line
module.exports = removeFromArray;
