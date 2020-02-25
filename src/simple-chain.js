const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
  
    return this;
  },
  removeLink(position) {
    if (position > this.getLength() || position < 1 || typeof position !== 'number') {
      this.chain = [];
      throw new Error();
    } 

    if (position === 1) {
      this.chain = this.chain.slice(1);
    } else if (position === this.getLength()){
        this.chain = this.chain.slice(0, -1);
    } else {
      this.chain = [...this.chain.slice(0, position - 1), ...this.chain.slice(position)];
    }
     return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();

    return this;
  },
  finishChain() {
    let finalChain = [];
    finalChain = this.chain.map((el) => `( ${el} )~~`)
                           .join('')
                           .slice(0, -2);
    this.chain = [];
    return finalChain;
  }
};

module.exports = chainMaker;
