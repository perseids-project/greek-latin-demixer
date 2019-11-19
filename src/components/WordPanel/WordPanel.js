import React, { Component } from 'react';
import { instanceOf } from 'prop-types';

import Clipboard from 'react-clipboard.js';
import { Tooltip } from 'react-tippy';

import Word from '../../lib/Word';
import { RefType } from '../../lib/types';
import I18n from '../I18n';

import styles from './WordPanel.module.css';

const handleClipboardSuccess = (event) => event.clearSelection();

class WordPanel extends Component {
  static getDerivedStateFromProps(props, state) {
    const { word: { text } } = props;
    const { previousText } = state;

    if (text !== previousText) {
      return { customText: text, previousText: text };
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      customText: null,
      previousText: null,
    };

    this.handleCustomChange = this.handleCustomChange.bind(this);
    this.handleCustomClick = this.handleCustomClick.bind(this);
    this.handleCustomKeyUp = this.handleCustomKeyUp.bind(this);
    this.handleGreekClick = this.handleGreekClick.bind(this);
    this.handleLatinClick = this.handleLatinClick.bind(this);
    this.renderLatinInput = this.renderLatinInput.bind(this);
    this.renderLatinTooltip = this.renderLatinTooltip.bind(this);
    this.renderGreekInput = this.renderGreekInput.bind(this);
    this.renderGreekTooltip = this.renderGreekTooltip.bind(this);
    this.renderCustomInput = this.renderCustomInput.bind(this);
    this.renderCustomTooltip = this.renderCustomTooltip.bind(this);
  }

  handleCustomChange(event) {
    this.setState({ customText: event.target.value });
  }

  handleCustomClick() {
    const { word: { onChange } } = this.props;
    const { customText } = this.state;

    onChange(customText);
  }

  handleCustomKeyUp(event) {
    const { word: { focus } } = this.props;
    const { customText } = this.state;

    if (event.key === 'Enter') {
      focus(customText);
    }
  }

  handleGreekClick() {
    const { word: { onChange, greek } } = this.props;

    onChange(greek);
  }

  handleLatinClick() {
    const { word: { onChange, latin } } = this.props;

    onChange(latin);
  }

  renderLatinInput() {
    const { word: { latin } } = this.props;

    return <input type="text" readOnly className="form-control text-primary mb-1" value={latin} />;
  }

  renderLatinTooltip() {
    const { word: { latin } } = this.props;

    if (latin !== '') {
      return (
        <Tooltip
          arrow="true"
          position="top"
          title="This box contains the selected word with all Greek characters replaced with Latin characters. For example, α becomes a. Click the 'Latin' button below to insert the suggestion."
        >

          {this.renderLatinInput()}
        </Tooltip>
      );
    }

    return this.renderLatinInput();
  }

  renderGreekInput() {
    const { word: { greek } } = this.props;

    return <input type="text" readOnly className="form-control text-danger mb-1" value={greek} />;
  }

  renderGreekTooltip() {
    const { word: { greek } } = this.props;

    if (greek !== '') {
      return (
        <Tooltip
          arrow="true"
          position="top"
          title="This box contains the selected word with all Latin characters replaced with Greek characters. For example, a becomes α. Click the 'Greek' button below to insert the suggestion."
        >

          {this.renderGreekInput()}
        </Tooltip>
      );
    }

    return this.renderGreekInput();
  }

  renderCustomInput() {
    const { customInputFocusRef } = this.props;
    const { customText } = this.state;

    return (
      <input
        type="text"
        className="form-control mb-1"
        value={customText}
        onChange={this.handleCustomChange}
        onKeyUp={this.handleCustomKeyUp}
        ref={customInputFocusRef}
      />
    );
  }

  renderCustomTooltip() {
    return (
      <Tooltip
        arrow="true"
        position="top"
        title="This box allows you to edit the selected word. Click the 'Custom' button to insert the edited word."
      >

        {this.renderCustomInput()}
      </Tooltip>
    );
  }

  render() {
    return (
      <form>
        <div className="form-group">
          {this.renderLatinTooltip()}
          <button type="button" className="btn btn-block btn-primary" onClick={this.handleLatinClick}>
            <I18n t="output.latin" />
          </button>
        </div>

        <div className="form-group">
          {this.renderGreekTooltip()}
          <button type="button" className="btn btn-block btn-danger" onClick={this.handleGreekClick}>
            <I18n t="output.greek" />
          </button>
        </div>

        <div className="form-group">
          {this.renderCustomTooltip()}
          <button type="button" className="btn btn-block btn-secondary" onClick={this.handleCustomClick}>
            <I18n t="output.custom" />
          </button>
        </div>

        <div className="form-group">
          <Clipboard
            button-type="button"
            className="btn btn-block btn-success mt-4"
            data-clipboard-target=".clipboard-target"
            onSuccess={handleClipboardSuccess}
          >

            <I18n t="output.copy" />
          </Clipboard>
        </div>

        <div className="form-group">
          <div className={styles.instructionsBox}>
            <h6>
              <I18n t="shortcuts.title" />
            </h6>
            <ul className={styles.instructionsList}>
              <li>
                <strong>Tab</strong>
                <I18n t="shortcuts.move" />
              </li>
              <li>
                <strong>l</strong>
                <I18n t="shortcuts.latinButton" />
              </li>
              <li>
                <strong>g</strong>
                <I18n t="shortcuts.greekButton" />
              </li>
              <li>
                <strong>c</strong>
                <I18n t="shortcuts.customInput" />
              </li>
              <li>
                <strong>Enter</strong>
                <I18n t="shortcuts.customButton" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    );
  }
}

WordPanel.propTypes = {
  word: instanceOf(Word).isRequired,
  customInputFocusRef: RefType.isRequired,
};

export default WordPanel;
