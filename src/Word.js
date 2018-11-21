import Convert from './lib/convert';

class Word {
  constructor(text, onChange, onUnselect, focus) {
    this.text = text || '';
    this.onChange = onChange || (() => {});
    this.onUnselect = onUnselect || (() => {});
    this.focus = focus || (() => {});

    this.greek = Convert.ltg(this.text);
    this.latin = Convert.gtl(this.text);
  }
}

export default Word;
