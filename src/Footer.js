import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-light">
        <div className="container">
          <span className="text-muted">
            <a href="" target="_blank" rel="noopener noreferrer">New Document</a>
            {" "}&bull;{" "}
            <a href="https://github.com/perseids-project/greek-latin-demixer" target="_blank" rel="noopener noreferrer">GitHub</a>
            {" "}&bull;{" "}
            <a href="https://github.com/perseids-project/greek-latin-demixer/issues" target="_blank" rel="noopener noreferrer">Issues</a>
            {" "}&bull;{" "}
            <a href="http://www.perseids.org/" target="_blank" rel="noopener noreferrer">Perseids</a>
          </span>
          <br />
        </div>
      </footer>
    );
  }
}

export default Footer;
