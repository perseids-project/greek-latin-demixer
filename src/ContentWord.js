import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Convert from './lib/convert';
import Word from './Word';

import './ContentWord.css';

const convertChar = (char, key) => {
  if (Convert.isGreek(char)) return <span key={key} className="text-danger">{char}</span>;
  if (Convert.isLatin(char)) return <span key={key} className="text-primary">{char}</span>;

  return char;
};

const convertWord = word => word.split('').map((a, i) => convertChar(a, i));

class ContentWord extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    selectActiveWord: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const { children } = this.props;

    this.state = { text: children, selected: false };

    this.handleFocus = this.handleFocus.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onUnselect = this.onUnselect.bind(this);
  }

  onChange(text) {
    this.setState({ text });
  }

  onUnselect() {
    this.setState({ selected: false });
  }

  handleFocus() {
    const { text } = this.state;
    const { selectActiveWord } = this.props;
    const word = new Word(text, this.onChange, this.onUnselect);

    selectActiveWord(word);
    this.setState({ selected: true });
  }

  render() {
    const { selected, text } = this.state;
    const className = selected ? 'yellow-bg' : 'yellow-bg-on-hover';

    return (
      <span className={className} onFocus={this.handleFocus} role="button" tabIndex="0">
        {convertWord(text)}
      </span>
    );
  }
}

export default ContentWord;
