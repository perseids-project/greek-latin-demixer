import React, { Component } from 'react';
import './InputXml.css';

class InputXml extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Αmong innumerable poetic references, cf. Ibyc. fr. 7 τᾶμος ἄυπνος \nκλυτὸς ὅρθρος ἐγείρησιν ἀηδόνας. Simon. fr. 73 δεῦτʼ ἀηδόνες πολυκώτιλοι, \nχλωραὺχενες εἰαριναί. Callim. L. P. 94 μάτηρ μέν γοερῶν οἶτον ἀηδονίδων \nἄγε βαρὺ κλαίουσα. Aesch. Ag. 1116 τυν, τυν στένουσα, ἀηδὼν. Soph. ',
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
        <h1 className="h3 mt-2 mb-1 font-weight-normal">Greek and Latin Demixer</h1>
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
