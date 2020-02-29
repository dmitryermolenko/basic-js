class VigenereCipheringMachine {
	constructor(type = true) {
      this.isDirect = type;
      this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.decryptedWord = '';
      this.encryptedWord = '';
      this.keyWord = '';
      this.indexKeyLetter = 0;
  }

    encrypt(decryptedWord, keyWord) {
      this.decryptedWord = decryptedWord.toUpperCase().split('');
      this.keyWord = keyWord.toUpperCase();
      this.indexKeyLetter = 0;
      this.encryptedWord = '';

      if(!this.decryptedWord || !this.keyWord) {
        throw new Error();
      }

      for(let i = 0; i < this.decryptedWord.length; i++) {
      	if(this.alpha.includes(this.decryptedWord[i])) {
      		this.encryptedWord += this.alpha[(this.alpha.indexOf(this.decryptedWord[i]) + this.alpha.indexOf(this.keyWord[this.indexKeyLetter % this.keyWord.length])) % 26];
      		this.indexKeyLetter++;
      	} else {
      		this.encryptedWord += this.decryptedWord[i];
      	}
      }

      return (this.isDirect) ? this.encryptedWord : this.encryptedWord.split('').reverse().join('');

    }

    decrypt(encryptedWord, keyWord) {
      this.encryptedWord = encryptedWord.toUpperCase();
      this.keyWord = keyWord.toUpperCase();
      this.indexKeyLetter = 0;
      this.decryptedWord = '';

      if(!this.encryptedWord || !this.keyWord) {
      	throw new Error();
      }

      
      for(let i = 0; i < this.encryptedWord.length; i++) {
      	if(this.alpha.includes(this.encryptedWord[i])) {
      		this.decryptedWord += this.alpha[((this.alpha.indexOf(this.encryptedWord[i]) - this.alpha.indexOf(this.keyWord[this.indexKeyLetter % this.keyWord.length])) + 26) % 26];
      		this.indexKeyLetter++;
      	} else {
      		this.decryptedWord += this.encryptedWord[i];
      	}
      }

      return (this.isDirect) ? this.decryptedWord : this.decryptedWord.split('').reverse().join('');

    }
}

module.exports = VigenereCipheringMachine;
