function pairs(obj) {
  let result = [];
  Object.entries(obj).forEach((x) => result.push([x[0], x[1]]));
  return result;
}

module.exports = {
  pairs: pairs,
};
