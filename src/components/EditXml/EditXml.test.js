import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'react-dom';

import EditXml from './EditXml';

it('renders without crashing', () => {
  const text = 'hello';
  const div = window.document.createElement('div');

  const component = (
    <MemoryRouter>
      <EditXml
        text={text}
      />
    </MemoryRouter>
  );

  render(component, div);
});
