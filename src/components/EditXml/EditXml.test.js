import React from 'react';
import { render } from 'react-dom';

import EditXml from './EditXml';

it('renders without crashing', () => {
  const text = 'hello';
  const div = window.document.createElement('div');
  render(<EditXml
    text={text}
  />, div);
});
