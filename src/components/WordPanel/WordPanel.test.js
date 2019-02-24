import React from 'react';
import { render } from 'react-dom';

import WordPanel from './WordPanel';
import Word from '../../lib/Word';

it('renders without crashing', () => {
  const word = new Word();
  const customInputFocusRef = 'hello';
  const div = window.document.createElement('div');
  render(
    <WordPanel word={word} customInputFocusRef={customInputFocusRef} />, div,
  );
});
