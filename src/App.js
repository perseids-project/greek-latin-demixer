import React, { Component } from 'react';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';

import 'perseids-react-components/build/css/index.css';

import EditXml from './EditXml.js';
import InputXml from './InputXml.js';

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
      <React.Fragment>
        <PerseidsHeader>
          Greek Latin Demixer
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="" target="_blank" rel="noopener noreferrer">New Document</a>
            </li>
          </ul>
        </PerseidsHeader>
        <div className="text-center">
          <div className="container">
            {this.state.text ? (
              <EditXml text={this.state.text} />
            ) : (
              <InputXml onSubmit={this.handleInputXmlSubmit} />
            )}
          </div>
        </div>
        <PerseidsFooter
          github="https://github.com/perseids-project/greek-latin-demixer"
          report="https://github.com/perseids-project/greek-latin-demixer/issues"
        />
      </React.Fragment>
    );
  }
}

export default App;
