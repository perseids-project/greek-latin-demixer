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
    focusCustomInput: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const { children } = this.props;

    this.state = {
      text: children,
      selected: false,
      word: undefined,
    };

    this.focusRef = React.createRef();

    this.onChange = this.onChange.bind(this);
    this.onUnselect = this.onUnselect.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.focus = this.focus.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  onChange(text) {
    this.setState({ text });
  }

  onUnselect() {
    this.setState({ selected: false });
  }

  handleKeyUp(event) {
    const { focusCustomInput } = this.props;
    const { word } = this.state;

    switch (event.key) {
      case 'g':
        this.onChange(word.greek);
        break;
      case 'l':
        this.onChange(word.latin);
        break;
      case 'c':
        focusCustomInput();
        break;
      default:
    }
  }

  focus(text) {
    this.setState({ text }, () => {
      this.focusRef.current.focus();
      this.handleFocus();
    });
  }

  handleFocus() {
    const { text } = this.state;
    const { selectActiveWord } = this.props;
    const word = new Word(text, this.onChange, this.onUnselect, this.focus);

    selectActiveWord(word);
    this.setState({ word, selected: true });
  }

  render() {
    const { selected, text } = this.state;
    const className = selected ? 'yellow-bg' : 'yellow-bg-on-hover';

    return (
      <span
        className={className}
        onFocus={this.handleFocus}
        onKeyUp={this.handleKeyUp}
        role="button"
        tabIndex="0"
        ref={this.focusRef}
      >

        {convertWord(text)}
      </span>
    );
  }
}

export default ContentWord;
