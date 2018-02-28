const lint = require('mocha-eslint');

const expect = require('chai').expect; // eslint-disable-line no-unused-vars

describe('Code must pass Eslint validation', () => {
  lint([
    'index.js',
    'test/**/*.js',
    'routes/**/*.js',
    'controllers/**/*.js',
    'lib/**/*.js',
    'auth/**/*.js',
    'config/**/*.js',
    'migrations/**/*.js',
    'emails/**/*.js',
    'serializers/**/*.js',
  ], {});
});
