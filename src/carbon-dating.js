const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const HALF_LIFE_CONSTANT = 0.693;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > 15|| isNaN(parseFloat(sampleActivity))) {
  	return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (HALF_LIFE_CONSTANT / HALF_LIFE_PERIOD));
}; 
