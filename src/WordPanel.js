import React, { Component } from 'react';
import Clipboard from 'react-clipboard.js';

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

  render() {
    return (
      <form>
        <div className="form-group">
          <input type="text" readOnly className="form-control text-primary mb-1" value={this.props.word.latin} />
          <button type="button" className="btn btn-block btn-primary" onClick={this.handleLatinClick}>
            Latin
          </button>
        </div>

        <div className="form-group">
          <input type="text" readOnly className="form-control text-danger mb-1" value={this.props.word.greek} />
          <button type="button" className="btn btn-block btn-danger" onClick={this.handleGreekClick}>
            Greek
          </button>
        </div>

        <div className="form-group">
          <input type="text" className="form-control mb-1" value={this.state.customText} onChange={this.handleCustomChange} />
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
