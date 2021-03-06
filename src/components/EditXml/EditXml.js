import React, { Component } from 'react';
import { string } from 'prop-types';

import ContentLine from '../ContentLine';
import WordPanel from '../WordPanel';
import Word from '../../lib/Word';
import I18n from '../I18n';

import styles from './EditXml.module.css';

class EditXml extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeWord: new Word(),
    };

    this.customInputFocusRef = React.createRef();

    this.convertText = this.convertText.bind(this);
    this.selectActiveWord = this.selectActiveWord.bind(this);
    this.focusCustomInput = this.focusCustomInput.bind(this);
  }

  convertText(text) {
    const { selectActiveWord, focusCustomInput } = this;

    return text.split('\n').map((line, ii) => (
      // In this case, we don't have any identifying features besides index
      // and multiple lines can have the same text.
      // The lines are also not going to be reordered, so there shouldn't be
      // any performance penalty to using index as key.
      // eslint-disable-next-line react/no-array-index-key
      <ContentLine key={ii} selectActiveWord={selectActiveWord} focusCustomInput={focusCustomInput}>
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

  focusCustomInput() {
    this.customInputFocusRef.current.focus();
  }

  render() {
    const { activeWord } = this.state;
    const { text } = this.props;

    return (
      <div className={styles.textView}>
        <h1 className="h3 mt-2 mb-1 font-weight-normal">
          <I18n t="output.viewText" />
        </h1>
        <h2 className="h5 mb-3 font-weight-normal">
          <span className="text-primary">
            <I18n t="output.latinText" />
          </span>
          <span className="text-danger">
            <I18n t="output.greekText" />
          </span>
          <I18n t="output.click" />
        </h2>
        <div className={`row ${styles.viewHeight}`}>
          <div className="col-3 pt-2 border">
            <WordPanel word={activeWord} customInputFocusRef={this.customInputFocusRef} />
          </div>
          <div className="col-9">
            <pre className={`${styles.textPre} clipboard-target bg-light p-1`}>
              {this.convertText(text)}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

EditXml.propTypes = {
  text: string.isRequired,
};

export default EditXml;
