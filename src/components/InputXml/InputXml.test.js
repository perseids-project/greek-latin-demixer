import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'react-dom';

import InputXml from './InputXml';

it('renders without crashing', () => {
  const onSubmit = () => { };
  const div = window.document.createElement('div');

  const component = (
    <MemoryRouter>
      <InputXml
        onSubmit={onSubmit}
      />
    </MemoryRouter>
  );

  render(component, div);
});
