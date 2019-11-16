import React, { Component } from 'react';
import { node, func } from 'prop-types';

import ContentWord from '../ContentWord';
import Delimit from '../../lib/delimit';

class ContentLine extends Component {
  constructor(props) {
    super(props);

    this.convertLine = this.convertLine.bind(this);
  }

  convertLine(line) {
    return Delimit.split(line).map((word, ii) => {
      if (word.type === 'word') {
        return this.renderWord(word, ii);
      }

      return word.string;
    });
  }

  renderWord(word, ii) {
    const { selectActiveWord, focusCustomInput } = this.props;

    return (
      // In this case, we don't have any identifying features besides index
      // and multiple words can have the same text.
      // The words are also not going to be reordered, so there shouldn't be
      // any performance penalty to using index as key.
      // eslint-disable-next-line react/no-array-index-key
      <ContentWord key={ii} selectActiveWord={selectActiveWord} focusCustomInput={focusCustomInput}>

        {word.string}
      </ContentWord>
    );
  }

  render() {
    const { children } = this.props;

    return this.convertLine(children);
  }
}

ContentLine.propTypes = {
  children: node.isRequired,
  selectActiveWord: func.isRequired,
  focusCustomInput: func.isRequired,
};

export default ContentLine;
