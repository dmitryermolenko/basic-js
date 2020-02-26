module.exports = class DepthCalculator {
    calculateDepth(arr, counter = 0, depthArray = []) {
      counter++;
      depthArray.push(counter);
      arr.forEach((item) => {
        if (Array.isArray(item)) {
          this.calculateDepth(item, counter, depthArray);
        }
      });
      return Math.max(...depthArray);

};
};