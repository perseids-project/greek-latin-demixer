import React from 'react';
import { render } from 'react-dom';

import ContentLine from './ContentLine';

it('renders without crashing', () => {
  const children = 'hello';
  const selectActiveWord = function () { };
  const focusCustomInput = function () { };
  const div = window.document.createElement('div');
  render(<ContentLine
    children={children}
    selectActiveWord={selectActiveWord}
    focusCustomInput={focusCustomInput}
  />, div);
});
