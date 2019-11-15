// the linter incorrectly thinks some of these escapes are useless
// with all of the "useless" escapes removed, the regex no longer works
// eslint-disable-next-line no-useless-escape
const splitRegExp = /([\s\/\\\(\)"'\:\,\.;<>~\!@#\$%\^&\*\|\+\=\[\]\{\}`\?\-…]+)/;

const split = (line) => (
  line.split(splitRegExp).map((string) => (
    splitRegExp.test(string) ? { type: 'delimiter', string } : { type: 'word', string }
  )).filter(({ string }) => string !== '')
);

const Delimit = { split };

export default Delimit;
