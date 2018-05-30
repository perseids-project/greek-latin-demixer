import React, { Component } from 'react';
import ContentWord from './ContentWord.js';
import Delimit from './lib/delimit.js';

class ContentLine extends Component {
  constructor(props) {
    super(props);

    this.convertLine = this.convertLine.bind(this);
  }

  convertLine(line) {
    return Delimit.split(line).map((word, ii) => {
      if (word.type === "word") {
        return (
          <ContentWord key={ii} selectActiveWord={this.props.selectActiveWord}>
            {word.string}
          </ContentWord>
        );
      }

      return word.string;
    });
  }

  render() {
    return this.convertLine(this.props.children);
  }
}

export default ContentLine;
