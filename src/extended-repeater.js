module.exports = function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' } = options;

  function getRepeatedArray(value, length) {
    const repeatedArray = [];
    for(let i = 1; i <= length; i++) {
      repeatedArray.push(String(value));
    }

    return repeatedArray;
  }

  str += (typeof addition !== 'undefined') ? getRepeatedArray(addition, additionRepeatTimes).join(additionSeparator) : '';

  return getRepeatedArray(str, repeatTimes).join(separator);
};