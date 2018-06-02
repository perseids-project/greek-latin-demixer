import React, { Component } from 'react';
import EditXml from './EditXml.js';
import InputXml from './InputXml.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: null,
    }

    this.handleInputXmlSubmit = this.handleInputXmlSubmit.bind(this);
  }

  handleInputXmlSubmit(text) {
    this.setState({
      text: text,
    });
  }

  render() {
    return (
      <div className="text-center">
        <div className="container">
          {this.state.text ? (
            <EditXml text={this.state.text} />
          ) : (
            <InputXml onSubmit={this.handleInputXmlSubmit} />
          )}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
