import {
  oneOfType,
  object,
  func,
  string,
} from 'prop-types';

const RefType = oneOfType([
  object,
  func,
  string,
]);

// We currently only have one type, but may have more in the future
// eslint-disable-next-line import/prefer-default-export
export { RefType };
