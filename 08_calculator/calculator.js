const add = function(num, num2) {
  return num + num2
};

const subtract = function(num, num2) {
	return num - num2
};

const sum = function(arr) {
  if(arr.length === 0) return 0
  let answer = arr.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
  });
  return answer
};

const multiply = function(arr) {
  let answer = arr.reduce(function (previousValue, currentValue) {
    return previousValue * currentValue;
  });
  return answer
};

const power = function(num, num2) {
	return Math.pow(num,num2)
};

const factorial = function(num) {
  if(num === 0) return 1
  let arr = []
  for(let i = 1; i < num + 1; i++) arr.push(i)
  let answer = arr.reduce(function (previousValue, currentValue) {
    return previousValue * currentValue;
  });
  return answer
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
