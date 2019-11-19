import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'react-dom';

import WordPanel from './WordPanel';
import Word from '../../lib/Word';

it('renders without crashing', () => {
  const word = new Word();
  const customInputFocusRef = 'hello';
  const div = window.document.createElement('div');

  const component = (
    <MemoryRouter>
      <WordPanel
        word={word}
        customInputFocusRef={customInputFocusRef}
      />
    </MemoryRouter>
  );

  render(component, div);
});
