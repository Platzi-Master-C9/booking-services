function getApiGatewayDirectory() {
  const path = __dirname.indexOf('utils');
  return `${__dirname.substring(0, path)}drivers/http/routes`;
}

module.exports = getApiGatewayDirectory;
