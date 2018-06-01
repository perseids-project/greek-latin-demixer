// eslint-disable-next-line
const splitRegExp = /([\s\/\\\(\)"'\:\,\.;<>~\!@#\$%\^&\*\|\+\=\[\]\{\}`\?\-…]+)/;

function split(line) {
  return line.split(splitRegExp).map(function(string) {
    let type = 'word';
    if (splitRegExp.test(string)) {
      type = 'delimiter';
    }

    return { type: type, string: string };
  });
}

const Delimit = {
  split: split,
};

export default Delimit;
