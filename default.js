function defaults(obj, defaultProps) {

  // Iterating over object to find if any undefined value is present
  Object.entries(defaultProps).forEach(
    (x) => (obj[x[0]] = typeof x[1] == "undefined" ? defaultProps[x[0]] : x[1])
  );
  return obj;
}

// eslint-disable-next-line no-undef
module.exports = {
  defaults: defaults,
};
