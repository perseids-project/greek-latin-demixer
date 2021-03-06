import React, { Component } from 'react';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';
import { BrowserRouter } from 'react-router-dom';

import 'perseids-react-components/build/css/index.css';

import EditXml from '../EditXml';
import InputXml from '../InputXml';
import I18n from '../I18n';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: null,
    };

    this.handleInputXmlSubmit = this.handleInputXmlSubmit.bind(this);
  }

  handleInputXmlSubmit(text) {
    this.setState({ text });
  }

  render() {
    const { text } = this.state;

    return (
      <BrowserRouter>
        <PerseidsHeader>
          <I18n t="title" />
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="." target="_blank" rel="noopener noreferrer">
                <I18n t="newDoc" />
              </a>
            </li>
          </ul>
        </PerseidsHeader>
        <div className="text-center">
          <div className="container-md">
            {text ? (
              <EditXml text={text} />
            ) : (
              <InputXml onSubmit={this.handleInputXmlSubmit} />
            )}
          </div>
        </div>
        <PerseidsFooter
          github="https://github.com/perseids-project/greek-latin-demixer"
          report="https://github.com/perseids-project/greek-latin-demixer/issues"
        />
      </BrowserRouter>
    );
  }
}

export default App;
