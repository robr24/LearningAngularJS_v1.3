'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var cgUtils = require('../utils.js');

var CgangularGenerator = module.exports = function CgangularGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.config.set('partialDirectory','partial/');
        this.config.set('modalDirectory','partial/');
        this.config.set('controllerDirectory', 'controller/');
        this.config.set('directiveDirectory','directive/');
        this.config.set('filterDirectory','filter/');
        this.config.set('factoryDirectory','factory/');
        this.config.set('serviceDirectory','service/');

        var inject = {
            js: {
                file: 'index.html',
                marker: cgUtils.JS_MARKER,
                template: '<script src="<%= filename %>"></script>'
            },
            less: {
                relativeToModule: true,
                file: '<%= module %>.less',
                marker: cgUtils.LESS_MARKER,
                template: '@import "<%= filename %>";'
            }
        };
        this.config.set('inject',inject);
        this.config.save();
        this.installDependencies({ skipInstall: options['skip-install'], bower: false });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(CgangularGenerator, yeoman.generators.Base);

CgangularGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [{
        name: 'appname',
        message: 'What would you like the angular app/module name to be?',
        default: path.basename(process.cwd())
    }];

    this.prompt(prompts, function (props) {
        this.appname = props.appname;
        cb();
    }.bind(this));
};

// prompt for git user name to handle automated git tasks in grunt
CgangularGenerator.prototype.askForGitUsername = function askFor() {
  var cb = this.async();

  var prompts = [{
    name: 'username',
    message: 'What is your git stash username?'
  }];

  this.prompt(prompts, function (props) {
    this.username = props.username;
    cb();
  }.bind(this));
};


CgangularGenerator.prototype.askForUiRouter = function askFor() {
    var cb = this.async();

    this.uirouter = true;
    this.routerJs = 'vendor/angular-ui-router/release/angular-ui-router.js';
    this.routerModuleName = 'ui.router';
    this.routerViewDirective = 'ui-view';

    this.config.set('uirouter',this.uirouter);
    cb();
};

CgangularGenerator.prototype.app = function app() {
    this.directory('skeleton/','./');
};

