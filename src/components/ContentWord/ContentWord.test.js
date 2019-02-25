import React from 'react';
import { render } from 'react-dom';

import ContentWord from './ContentWord';

it('renders without crashing', () => {
  const selectActiveWord = () => { };
  const focusCustomInput = () => { };
  const div = window.document.createElement('div');
  render(
    <ContentWord
      selectActiveWord={selectActiveWord}
      focusCustomInput={focusCustomInput}
    >
      children
    </ContentWord>, div,
  );
});
