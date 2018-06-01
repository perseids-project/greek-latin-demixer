import React, { Component } from 'react';
import './InputXml.css';

class InputXml extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Τhe quick broωn fox jumps over the lαzy dog.',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-input">
        <h1 className="h3 mt-2 mb-1 font-weight-normal">Latin and Greek Demixer</h1>
        <h5 className="h5 mb-3 font-weight-normal">Enter text that contains Greek and Latin characters below.</h5>
        <label htmlFor="xmlInput" className="sr-only">Text</label>
        <textarea id="xmlInput" rows="10" className="form-control" placeholder="Enter text here ..." required autoFocus
          value={this.state.text} onChange={this.handleChange} />

        <button className="mt-3 btn btn-lg btn-primary btn-block" type="submit">Go!</button>
      </form>
    );
  }
}

export default InputXml;
