import React, { Component } from 'react';
import './InputXml.css';

class InputXml extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Text submitted: ' + this.state.value);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-input">
        <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please enter text</h1>
        <label for="xmlInput" className="sr-only">Text</label>
        <textarea id="xmlInput" rows="10" className="form-control" placeholder="Paste text here ..." required autofocus
          value={this.state.value} onChange={this.handleChange} />

        <button className="mt-3 btn btn-lg btn-primary btn-block" type="submit">Go!</button>
      </form>
    );
  }
}

export default InputXml;
