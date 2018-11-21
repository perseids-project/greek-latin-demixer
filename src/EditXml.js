import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentLine from './ContentLine';
import WordPanel from './WordPanel';
import Word from './Word';

import './EditXml.css';

class EditXml extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeWord: new Word(),
    };

    this.convertText = this.convertText.bind(this);
    this.selectActiveWord = this.selectActiveWord.bind(this);
  }

  convertText(text) {
    return text.split('\n').map((line, ii) => (
      // In this case, we don't have any identifying features besides index
      // and multiple lines can have the same text.
      // The lines are also not going to be reordered, so there shouldn't be
      // any performance penalty to using index as key.
      // eslint-disable-next-line react/no-array-index-key
      <ContentLine key={ii} selectActiveWord={this.selectActiveWord}>
        {`${line} \n`}
      </ContentLine>
    ));
  }

  selectActiveWord(word) {
    const { activeWord } = this.state;

    activeWord.onUnselect();

    this.setState({
      activeWord: word,
    });
  }

  render() {
    const { activeWord } = this.state;
    const { text } = this.props;

    return (
      <div className="text-view">
        <h1 className="h3 mt-2 mb-1 font-weight-normal">View Text</h1>
        <h5 className="h5 mb-3 font-weight-normal">
          <span className="text-primary">Latin text is blue. </span>
          <span className="text-danger">Greek text is red. </span>
          Click on a word to edit it
        </h5>
        <div className="row view-height">
          <div className="col-sm-3 pt-2 border">
            <WordPanel word={activeWord} />
          </div>
          <div className="col-sm-9">
            <pre className="text-pre bg-light p-1">
              {this.convertText(text)}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default EditXml;
