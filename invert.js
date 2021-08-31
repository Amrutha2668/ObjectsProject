function invert(obj) {
  let invertedObject = {};
  for (let x in obj) {
    // Checking if the give key in obj is present in invertedObject as value.
    if (Object.values(invertedObject).indexOf(x) == -1) {
      invertedObject[obj[x]] = x;
    }
  }
  return invertedObject;
}

module.exports = {
  invert: invert,
};
