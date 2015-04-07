'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  initializing: function() {
    this.pkg = require('../package.json');

    this.config.defaults({

    });
  },

  prompting: function() {
    var done = this.async();
    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname
    }, {
      type    : 'input',
      name    : 'assetsPath',
      message : 'Your assets folder name please?',
      store: true,
      default : this.config.get('assetsPath') || 'assets'
    }, {
      type: 'list',
      name: 'backend',
      message: 'Which Backend?',
      choices: [{
        name: 'PHP Framework',
        value: 'psr2'
      }, {
        name: 'Drupal',
        value: 'drupal'
      }, {
        name: 'WordPress',
        value: 'wordpress'
      }, {
        name: 'Node.js',
        value: 'nodejs'
      }],
      store: true,
      default : this.config.get('backend') || 'psr2'
    }];

    this.prompt(prompts, function (answers) {
      this.config.set('name', answers.name);
      this.config.set('assetsPath', answers.assetsPath);
      this.config.set('backend', answers.backend);

      this.appname = answers.name;
      this.assetsPath = answers.assetsPath;
      this.backend = answers.backend;

      done();
    }.bind(this));
  },

  configuring: function() {
    this.template('_.bowerrc', '.bowerrc');
    this.template('_.editorconfig', '.editorconfig');
    this.template('_.gitignore', '.gitignore');
    this.template('_.jsbeautifyrc', '.jsbeautifyrc');
    this.template('_.jshintrc', '.jshintrc');
    this.template('_.scss-lint.yml', '.scss-lint.yml');
    this.template('_bower.json', 'bower.json');
    this.template('_config.rb', 'config.rb');
    this.template('_Gruntfile.js', 'Gruntfile.js');
    this.template('_package.json', 'package.json');

    this.directory('tasks');
    this.directory('assets', this.assetsPath);
  },

  writing: function() {
    this.config.save();
  },

  install: function () {
    if(!this.options['skip-install']) {
      this.installDependencies({
        skipMessage: this.options['skip-install-message'],
        skipInstall: this.options['skip-install']
      });
    }

    this.on('end', function () {

    });
  }

});
