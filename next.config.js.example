const withPlugins = require('next-compose-plugins');
const path = require('path');

const config = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  basePath: '/preview/mattress',
  assetPrefix: 'http://localhost:8080/preview/mattress',
};

module.exports = withPlugins([], config);
