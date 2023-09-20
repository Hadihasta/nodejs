// local module

// persegi

exports.luaspersegi = function (sisi) {
  return sisi * sisi;
};
exports.kelilingpersegi = function (sisi) {
  return sisi ** 4;
};

// persegi panjang
exports.luaspp = function (panjang, lebar) {
  return panjang * lebar;
};
exports.kelilingpp = function (panjang, lebar) {
  return panjang * panjang + lebar * lebar;
};
