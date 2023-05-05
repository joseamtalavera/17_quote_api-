const path = require('path');

module.exports = {
  entry: './public/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/build'),
  },
  mode: process.env.NODE_ENV || 'development',
};
