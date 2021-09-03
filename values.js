function values(obj) {
  let result = [];
  for (let value in obj) {
    result.push(obj[value]);
  }
  return result;
}

// eslint-disable-next-line no-undef
module.exports = {
  values: values,
};
