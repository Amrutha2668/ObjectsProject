function values(obj) {
  let result = [];
  for (let value in obj) {
    result.push(obj[value]);
  }
  return result;
}

module.exports = {
  values: values,
};
