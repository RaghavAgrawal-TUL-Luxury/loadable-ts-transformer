const path = require("path");

// const { loadableTransformer } = require('loadable-transformer-ts5');
const { loadableTransformer } = require('../lib');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({ before: [loadableTransformer] }),
        },
      }
    ],
  },
};
