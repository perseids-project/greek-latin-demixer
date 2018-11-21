import PropTypes from 'prop-types';

const RefType = PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]);

// We currently only have one type, but may have more in the future
// eslint-disable-next-line import/prefer-default-export
export { RefType };
