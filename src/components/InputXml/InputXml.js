import React, { Component } from 'react';
import { func } from 'prop-types';

import I18n from '../I18n';
import styles from './InputXml.module.css';

class InputXml extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Αmong innumerable poetic references, cf. Ibyc. fr. 7 τᾶμος ἄυπνος \nκλυτὸς ὅρθρος ἐγείρησιν ἀηδόνας. Simοn. fr. 73 δεῦτʼ ἀηδόνες πoλυκώτιλοι, \nχλωραὺχενες εἰαριναί. Callim. L. P. 94 μάτηρ μέν γοερῶν οἶτον ἀηδονίδων \nἄγε βαρὺ κλaίουσα. Aesch. Ag. 1116 τυν, τυν στένουσα, ἀηδὼν. Soph. ',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { text } = this.state;
    const { onSubmit } = this.props;

    onSubmit(text);
  }

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.formInput}>
        <h1 className="h3 mt-2 mb-1 font-weight-normal">
          <I18n t="input.title" />
        </h1>
        <h2 className="h5 mb-3 font-weight-normal">
          <I18n t="input.instructions" />
        </h2>
        {/* We are stuck with an old version of jsx-a11y because of react scripts */}
        {/* but this should be compliant with with newer version. */}
        {/* Of course, disabling the eslint rules breaks the max line rules... */}
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control */}
        <label htmlFor="xmlInput" className="sr-only">
          <I18n t="input.text" />
        </label>
        <textarea
          id="xmlInput"
          rows="10"
          className="form-control"
          placeholder="Enter text here ..."
          required
          autoFocus
          value={text}
          onChange={this.handleChange}
        />

        <button className="mt-3 btn btn-lg btn-primary btn-block" type="submit">
          <I18n t="input.go" />
        </button>
      </form>
    );
  }
}

InputXml.propTypes = {
  onSubmit: func.isRequired,
};

export default InputXml;
