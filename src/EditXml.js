import React, { Component } from 'react';
import ContentLine from './ContentLine.js';
import WordPanel from './WordPanel.js';
import './EditXml.css';

class EditXml extends Component {
  constructor(props) {
    super(props);

    this.convertText = this.convertText.bind(this);
  }

  convertText(text) {
    return text.split("\n").map((a, i) => <ContentLine key={i}>{`${a}\n`}</ContentLine>)
  }

  render() {
    return (
      <div className="text-view">
        <h1 className="h3 mt-4 mb-1 font-weight-normal">View Text</h1>
        <h5 className="h5 mb-3 font-weight-normal">
          <span className="text-primary">Latin text is blue. </span>
          <span className="text-danger">Greek text is red.</span>
          Click on a word to edit it
        </h5>
        <div className="row">
          <div className="col-sm-2 pt-2 border">
            <WordPanel />
          </div>
          <div className="col-sm-10 pr-0">
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
