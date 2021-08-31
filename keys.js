function keys(obj) {
  let result = [];
  // Looping over obj for keys
  for (let value in obj) {
    result.push(value);
  }
  //   console.log(typeof result[0]);
  return result;
}

module.exports = {
  keys: keys,
};
