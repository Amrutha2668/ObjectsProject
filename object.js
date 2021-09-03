function mapObject(obj, cb) {
  Object.entries(obj).forEach((x) => (obj[x[0]] = cb(x[1])));
  return obj;
}

// eslint-disable-next-line no-undef
module.exports = {
  mapObject: mapObject,
};
