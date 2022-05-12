const generateSuffix = (packageName) => {
  const delimiter = packageName.indexOf('/') + 1;
  let preffix = packageName.substring(delimiter, packageName.length);

  preffix = preffix.toUpperCase();

  return preffix;
};

module.exports = generateSuffix;
