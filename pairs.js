function pairs(obj) {
  let result = [];
  Object.entries(obj).forEach((x) => result.push([x[0], x[1]]));
  return result;
}

// eslint-disable-next-line no-undef
module.exports = {
  pairs: pairs,
};
