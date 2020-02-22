module.exports = function countCats(matrix) {
  return matrix.flat(2)
               .reduce((acc, val) => { (val === '^^') ? acc++ : acc;
                return acc;
           }, 0);
};
