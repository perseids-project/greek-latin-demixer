import Convert from './lib/convert';

class Word {
  constructor(text, onChange, onUnselect) {
    this.text = text || '';
    this.onChange = onChange || (() => {});
    this.onUnselect = onUnselect || (() => {});

    this.greek = Convert.ltg(this.text);
    this.latin = Convert.gtl(this.text);
  }
}

export default Word;
