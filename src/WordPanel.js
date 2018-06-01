import React, { Component } from 'react';
import Clipboard from 'react-clipboard.js';
import { Tooltip } from 'react-tippy';

class WordPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customText: '',
    };

    this.handleClipboardSuccess = this.handleClipboardSuccess.bind(this);
    this.handleCustomChange = this.handleCustomChange.bind(this);
    this.handleCustomClick = this.handleCustomClick.bind(this);
    this.handleGreekClick = this.handleGreekClick.bind(this);
    this.handleLatinClick = this.handleLatinClick.bind(this);
    this.renderLatinInput = this.renderLatinInput.bind(this);
    this.renderLatinTooltip = this.renderLatinTooltip.bind(this);
    this.renderGreekInput = this.renderGreekInput.bind(this);
    this.renderGreekTooltip = this.renderGreekTooltip.bind(this);
    this.renderCustomInput = this.renderCustomInput.bind(this);
    this.renderCustomTooltip = this.renderCustomTooltip.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ customText: props.word.text });
  }

  handleClipboardSuccess(event) {
    event.clearSelection();
  }

  handleCustomChange(event) {
    this.setState({ customText: event.target.value });
  }

  handleCustomClick() {
    this.props.word.onChange(this.state.customText);
  }

  handleGreekClick() {
    this.props.word.onChange(this.props.word.greek);
  }

  handleLatinClick() {
    this.props.word.onChange(this.props.word.latin);
  }

  renderLatinInput() {
    return <input type="text" readOnly className="form-control text-primary mb-1" value={this.props.word.latin} />;
  }

  renderLatinTooltip() {
    if (this.props.word.latin !== '') {
      return (
        <Tooltip
          arrow="true"
          position="top"
          title="This box contains the selected word with all Greek characters replaced with Latin characters. For example, α becomes a. Click the 'Latin' button below to insert the suggestion.">

          {this.renderLatinInput()}
        </Tooltip>
      );
    }

    return this.renderLatinInput();
  }

  renderGreekInput() {
    return <input type="text" readOnly className="form-control text-danger mb-1" value={this.props.word.greek} />;
  }

  renderGreekTooltip() {
    if (this.props.word.greek !== '') {
      return (
        <Tooltip
          arrow="true"
          position="top"
          title="This box contains the selected word with all Latin characters replaced with Greek characters. For example, a becomes α. Click the 'Greek' button below to insert the suggestion.">

          {this.renderGreekInput()}
        </Tooltip>
      );
    }

    return this.renderGreekInput();
  }

  renderCustomInput() {
    return  <input type="text" className="form-control mb-1" value={this.state.customText} onChange={this.handleCustomChange} />;
  }

  renderCustomTooltip() {
    if (this.state.customText !== '') {
      return (
        <Tooltip
          arrow="true"
          position="top"
          title="This box allows you to edit the selected word. Click the 'Custom' button to insert the edited word.">

          {this.renderCustomInput()}
        </Tooltip>
      );
    }

    return this.renderCustomInput();
  }

  render() {
    return (
      <form>
        <div className="form-group">
          {this.renderLatinTooltip()}
          <button type="button" className="btn btn-block btn-primary" onClick={this.handleLatinClick}>
            Latin
          </button>
        </div>

        <div className="form-group">
          {this.renderGreekTooltip()}
          <button type="button" className="btn btn-block btn-danger" onClick={this.handleGreekClick}>
            Greek
          </button>
        </div>

        <div className="form-group">
          {this.renderCustomTooltip()}
          <button type="button" className="btn btn-block btn-secondary" onClick={this.handleCustomClick}>
            Custom
          </button>
        </div>

        <div className="form-group">
          <Clipboard button-type="button"
            className="btn btn-block btn-success mt-4"
            data-clipboard-target=".text-pre"
            onSuccess={this.handleClipboardSuccess}>

            Copy to Clipboard
          </Clipboard>
        </div>
      </form>
    );
  }
}

export default WordPanel;
