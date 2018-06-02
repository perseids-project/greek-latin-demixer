import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-light">
        <div className="container">
          <span className="text-muted">
            <a href="" target="_blank">New Document</a>
            {" "}&bull;{" "}
            <a href="https://github.com/perseids-project/greek-latin-demixer" target="_blank">GitHub</a>
            {" "}&bull;{" "}
            <a href="https://github.com/perseids-project/greek-latin-demixer/issues" target="_blank">Issues</a>
            {" "}&bull;{" "}
            <a href="http://www.perseids.org/" target="_blank">Perseids</a>
          </span>
          <br />
        </div>
      </footer>
    );
  }
}

export default Footer;
