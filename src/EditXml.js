import React, { Component } from 'react';
import ContentLine from './ContentLine.js';
import WordPanel from './WordPanel.js';
import Word from './Word.js';
import './EditXml.css';

class EditXml extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeWord: new Word(),
    };

    this.convertText = this.convertText.bind(this);
    this.selectActiveWord = this.selectActiveWord.bind(this);
  }

  convertText(text) {
    return text.split("\n").map((line, ii) => {
      return <ContentLine key={ii} selectActiveWord={this.selectActiveWord}>
        {line + "\n"}
      </ContentLine>;
    });
  }

  selectActiveWord(word) {
    this.state.activeWord.onUnselect();

    this.setState({
      activeWord: word,
    });
  }

  render() {
    return (
      <div className="text-view">
        <h1 className="h3 mt-2 mb-1 font-weight-normal">View Text</h1>
        <h5 className="h5 mb-3 font-weight-normal">
          <span className="text-primary">Latin text is blue. </span>
          <span className="text-danger">Greek text is red. </span>
          Click on a word to edit it
        </h5>
        <div className="row vh-80">
          <div className="col-sm-3 pt-2 border">
            <WordPanel word={this.state.activeWord} />
          </div>
          <div className="col-sm-9 pr-0">
            <pre className="text-pre bg-light p-1">
              {this.convertText(this.props.text)}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default EditXml;
