import React, { Component } from 'react';

class WordPanel extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <input type="text" readOnly className="form-control text-primary mb-1" value={this.props.word.latin} />
          <button type="button" className="btn btn-block btn-primary">Latin</button>
        </div>

        <div className="form-group">
          <input type="text" readOnly className="form-control text-danger mb-1" value={this.props.word.greek} />
          <button type="button" className="btn btn-block btn-danger">Greek</button>
        </div>

        <div className="form-group">
          <input type="text" className="form-control mb-1" />
          <button type="button" className="btn btn-block btn-secondary">Custom</button>
        </div>
      </form>
    );
  }
}

export default WordPanel;
