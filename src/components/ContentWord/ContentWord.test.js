import React from 'react';
import { render } from 'react-dom';

import ContentWord from './ContentWord';

it('renders without crashing', () => {
  const children = 'hello';
  const selectActiveWord = function () { };
  const focusCustomInput = function () { };
  const div = window.document.createElement('div');
  render(<ContentWord
    children={children}
    selectActiveWord={selectActiveWord}
    focusCustomInput={focusCustomInput}
  />, div);
});
