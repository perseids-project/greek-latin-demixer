import React, { Component } from 'react';
import Convert from './lib/convert.js';

class ContentLine extends Component {
  constructor(props) {
    super(props);

    this.convertLine = this.convertLine.bind(this);
    this.convertChar = this.convertChar.bind(this);
  }

  convertLine(line) {
    return line.split("").map((a, i) => this.convertChar(a, i));
  }

  convertChar(char, key) {
    if (Convert.isGreek(char)) return <span key={key} className="text-danger">{char}</span>;
    if (Convert.isLatin(char)) return <span key={key} className="text-primary">{char}</span>;

    return char;
  }

  render() {
    console.log(this.props.children);
    return this.convertLine(this.props.children);
  }
}

export default ContentLine;
