'use strict';

const webpack       = require('karma-webpack');
const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    // basePath:   './',
    files: [
      'src/entrypoint.js',
      'src/tests.webpack.js',
      // '*!(.module|.spec).js',
      // '!(bower_components)/**/*!(.module|.spec).js',
      // '**/*.spec.js'
    ],

    preprocessors: {
      'src/entrypoint.js': ['webpack'],
      'src/tests.webpack.js': ['webpack'],
    },
    autoWatch:     true,
    frameworks:    ['jasmine'],
    browsers:      ['Chrome', 'Firefox'],
    plugins:       [
      webpack,
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],
    webpack:       webpackConfig
  });
};
