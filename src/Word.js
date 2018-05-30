import Convert from './lib/convert.js';

class Word {
  constructor(text, onChange, onUnselect) {
    this.text = text || '';
    this.onChange = onChange || function() {};
    this.onUnselect = onUnselect || function() {};

    this.greek = Convert.ltg(this.text);
    this.latin = Convert.gtl(this.text);
  }
}

export default Word;
