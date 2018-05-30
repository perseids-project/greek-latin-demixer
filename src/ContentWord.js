import React, { Component } from 'react';
import Convert from './lib/convert.js';
import Word from './Word.js';
import './ContentWord.css';

class ContentWord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.children,
      selected: false,
    };

    this.convertChar = this.convertChar.bind(this);
    this.convertWord = this.convertWord.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onUnselect = this.onUnselect.bind(this);
  }

  convertChar(char, key) {
    if (Convert.isGreek(char)) return <span key={key} className="text-danger">{char}</span>;
    if (Convert.isLatin(char)) return <span key={key} className="text-primary">{char}</span>;

    return char;
  }

  convertWord(word) {
    return word.split("").map((a, i) => this.convertChar(a, i));
  }

  handleClick() {
    let word = new Word(this.state.text, this.onChange, this.onUnselect);

    this.props.selectActiveWord(word);
    this.setState({ selected: true });
  }

  onChange(text) {
    this.setState({ text: text });
  }

  onUnselect() {
    this.setState({ selected: false });
  }

  render() {
    let className = this.state.selected ? "yellow-bg" : "yellow-bg-on-hover";

    return (
      <span className={className} onClick={this.handleClick}>
        {this.convertWord(this.state.text)}
      </span>
    );
  }
}

export default ContentWord;
