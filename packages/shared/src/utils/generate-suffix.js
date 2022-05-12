const generateSuffix = (packageName) => {
  const delimiter = packageName.indexOf('/') + 1;
  let suffix = packageName.substring(delimiter, packageName.length);

  suffix = suffix.toUpperCase();

  return suffix;
};

module.exports = generateSuffix;
