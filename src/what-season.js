module.exports = function getSeason(date) {
  if(!date) {
  	return 'Unable to determine the time of year!';
  }

  if(Object.prototype.toString.call(date) != '[object Date]') {
  	throw new Error('Invalid format');
  }
  
  let month = date.getMonth();
  return (month < 2 || month === 11) ? 'winter' : (month < 5) ? 'spring' : (month < 8) ? 'summer' : 'autumn';
};
