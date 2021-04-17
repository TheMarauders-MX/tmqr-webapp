// craco.config.js
const path = require('path');
require('dotenv').config({ path: '.env' });

module.exports = {
  webpack: {
    alias: {
      // Add the aliases for all the top-level folders in the `src/` folder.
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@graphql': path.resolve(__dirname, 'src/graphql/'),
      '@helpers': path.resolve(__dirname, 'src/lib/helpers/'),
      '@hocs': path.resolve(__dirname, 'src/lib/hocs/'),
      '@hubs': path.resolve(__dirname, 'src/lib/hubs/'),
      '@models': path.resolve(__dirname, 'src/models/'),
      '@samples': path.resolve(__dirname, 'src/samples/'),
      '@screens': path.resolve(__dirname, 'src/screens/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@theme': path.resolve(__dirname, 'src/theme/'),
      '@utils': path.resolve(__dirname, 'src/lib/utils/'),
    },
  },
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src')],
        },
        additionalData: process.env.PUBLIC_URL
          ? '$baseurl: ' + process.env.PUBLIC_URL + ';'
          : '$baseurl: "";',
      },
    },
  },
};

// prependData ref
// https://stackoverflow.com/questions/58174234/how-i-can-pass-environment-variables-to-scss-sass-file-using-laravel-mix-and-we
