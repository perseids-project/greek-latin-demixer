import React from 'react';
import { render } from 'react-dom';

import InputXml from './InputXml';

it('renders without crashing', () => {
  const onSubmit = function () { };
  const div = window.document.createElement('div');
  render(<InputXml
    onSubmit={onSubmit}
  />, div);
});
