module.exports = function transform(arr ) {
    if(Object.prototype.toString.call(arr) != '[object Array]') {
    	throw new Error();
    }

    if(!arr.length) {
    	return [];
    }

    let transformedArr = [];

    for(let i = 0; i < arr.length; i++) {
    	switch(arr[i]) {
    		case '--discard-next':
    		  if(i + 1 < arr.length) {
    		  	i++;
    		  }
    		break;

    		case '--discard-prev':
    		  if(i - 1 >= 0)
              transformedArr.pop(arr[i - 1]);
    		break;

    		case '--double-next':
    		  if(i + 1 < arr.length) {
    		  	 transformedArr.push(arr[i + 1]);
    		  }
    		break;

    		case '--double-prev':
    		  if(i - 1 >= 0) {
    		  	transformedArr.push(arr[i - 1]);
    		  }
            
    		break;

    		default:
            transformedArr.push(arr[i]);
    	}
    }

    return transformedArr;

    
};
