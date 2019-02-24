import React from 'react';
import { render } from 'react-dom';

import ContentLine from './ContentLine';

it('renders without crashing', () => {
  const selectActiveWord = () => { };
  const focusCustomInput = () => { };
  const div = window.document.createElement('div');
  render(
    <ContentLine
      selectActiveWord={selectActiveWord}
      focusCustomInput={focusCustomInput}
    >
      children
    </ContentLine>, div,
  );
});
