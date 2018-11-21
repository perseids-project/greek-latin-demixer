import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentWord from './ContentWord';
import Delimit from './lib/delimit';

class ContentLine extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    selectActiveWord: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.convertLine = this.convertLine.bind(this);
  }

  convertLine(line) {
    const { selectActiveWord } = this.props;

    return Delimit.split(line).map((word, ii) => {
      if (word.type === 'word') {
        return (
          // In this case, we don't have any identifying features besides index
          // and multiple words can have the same text.
          // The words are also not going to be reordered, so there shouldn't be
          // any performance penalty to using index as key.
          // eslint-disable-next-line react/no-array-index-key
          <ContentWord key={ii} selectActiveWord={selectActiveWord}>
            {word.string}
          </ContentWord>
        );
      }

      return word.string;
    });
  }

  render() {
    const { children } = this.props;

    return this.convertLine(children);
  }
}

export default ContentLine;
