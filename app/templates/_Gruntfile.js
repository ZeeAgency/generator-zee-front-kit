'use strict';

module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    env: process.env
  };

  grunt.util._.extend(config, _loadConfig('tasks/'));

  grunt.initConfig(config);

  grunt.registerTask('default', [
    'concurrent:watch'
  ]);
  
  grunt.registerTask('start', [
    'sass:dev',
    'autoprefixer',
    'bowerRequirejs',
    'uglify'
  ]);
};

function _loadConfig(cwd, path) {
  var glob = require('glob');
  var object = {};
  var key;
  path = path || '*';

  glob.sync(path, {
    cwd: cwd
  }).forEach(function(option) {
    key = option.replace(/\.js$/, '');
    key = key.split('/').pop();
    object[key] = require(cwd + option);
  });

  return object;
}

