function keys(obj) {
  let result = [];
  // Looping over obj for keys
  for (let value in obj) {
    result.push(value);
  }
  //   console.log(typeof result[0]);
  return result;
}

// eslint-disable-next-line no-undef
module.exports = {
  keys: keys,
};
