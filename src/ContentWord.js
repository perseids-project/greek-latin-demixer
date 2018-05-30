import React, { Component } from 'react';
import Convert from './lib/convert.js';
import './ContentWord.css';

class ContentWord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.children,
    }

    this.convertWord = this.convertWord.bind(this);
    this.convertChar = this.convertChar.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  convertWord(word) {
    return word.split("").map((a, i) => this.convertChar(a, i));
  }

  convertChar(char, key) {
    if (Convert.isGreek(char)) return <span key={key} className="text-danger">{char}</span>;
    if (Convert.isLatin(char)) return <span key={key} className="text-primary">{char}</span>;

    return char;
  }

  handleClick() {
    alert(this.state.text);
  }

  render() {
    return (
      <span className="yellow-on-hover" onClick={this.handleClick}>
        {this.convertWord(this.state.text)}
      </span>
    );
  }
}

export default ContentWord;
