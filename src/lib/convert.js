const ltgMap = {
  A: "Α",
  B: "Β",
  E: "Ε",
  H: "Η",
  I: "Ι",
  K: "Κ",
  M: "Μ",
  N: "Ν",
  O: "Ο",
  P: "Ρ",
  T: "Τ",
  X: "Χ",
  Y: "Υ",
  Z: "Ζ",
  a: "α",
  b: "β",
  e: "ε",
  i: "ι",
  k: "κ",
  o: "ο",
  p: "ρ",
  t: "τ",
  u: "υ",
  v: "v",
  w: "ω",
  x: "χ",
};

const gtlMap = {
  Α: "A",
  Β: "B",
  Ε: "E",
  Ζ: "Z",
  Η: "H",
  Ι: "I",
  Κ: "K",
  Μ: "M",
  Ν: "N",
  Ο: "O",
  Ρ: "P",
  Τ: "T",
  Υ: "Y",
  Χ: "X",
  α: "a",
  β: "b",
  δ: "d",
  ε: "e",
  ι: "i",
  κ: "k",
  ν: "v",
  ο: "o",
  ρ: "p",
  τ: "t",
  υ: "u",
  χ: "x",
  ω: "w",
};

const charRange = {
  greek: "αΑβΒγΓδΔεΕζΖηΗθΘιΙκΚλΛμΜνΝξΞοΟπΠρῤῥΡῬςϲϹσΣτΤυΥφΦχΧψΨωΩἀἁάὰᾶᾳᾀᾁᾴᾲᾷἄἅἂἃἆἇᾄᾅᾂᾃᾆᾇἈἉΆᾺᾼᾈᾉἌἍἊἋἎἏᾌᾍᾊᾋᾎᾏἐἑέὲἒἓἔἕἘἙΈῈἚἛἜἝἠἡήὴῆῃᾐᾑῄῂῇἤἥἢἣἦἧᾔᾕᾒᾓᾖᾗἨἩΉῊῌᾘᾙἬἭἪἫἮἯᾜᾝᾚᾛᾞᾟἰἱίὶῖϊἲἳἴἵἶἷΐῒῗἸἹΊῚΪἺἻἼἽἾἿὀὁόὸὂὃὄὅὈὉΌῸὊὋὌὍὐὑύὺῦϋὒὓὔὕὖὗΰῢῧὙΎῪΫὛὝὟὠὡώὼῶῳᾠᾡῴῲῷὤὥὢὣὦὧᾤᾥᾢᾣᾦᾧὨὩΏῺῼᾨᾩὬὭὪὫὮὯᾬᾭᾪᾫᾮᾯ",
  latin: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
};

const greekRegExp = new RegExp(`[${charRange.greek}]`);
const latinRegExp = new RegExp(`[${charRange.latin}]`);
const mixtureRegExp = new RegExp(`([${charRange.greek}][${charRange.latin}])|([${charRange.latin}][${charRange.greek}])`)

const ltgFactory = function (map) {
  return function (string) {
    return string.split("").map(a => map[a] || "?").join("")
  };
};

const Convert = {
  ltg: ltgFactory(ltgMap),
  gtl: ltgFactory(gtlMap),
  isMixture: RegExp.prototype.test.bind(mixtureRegExp),
  isGreek: RegExp.prototype.test.bind(greekRegExp),
  isLatin: RegExp.prototype.test.bind(latinRegExp),
};

export default Convert;
