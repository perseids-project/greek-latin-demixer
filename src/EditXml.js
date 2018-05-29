import React, { Component } from 'react';
import ContentLine from './ContentLine.js';
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
        <h1 className="h3 mt-4 mb-3 font-weight-normal">View Text</h1>
        <pre className="text-pre bg-light p-1">
          {this.convertText(this.props.text)}
        </pre>
      </div>
    );
  }
}

export default EditXml;
