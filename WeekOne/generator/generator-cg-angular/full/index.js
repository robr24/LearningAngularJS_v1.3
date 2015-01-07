'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var cgUtils = require('../utils.js');
var chalk = require('chalk');
var _ = require('underscore');
var fs = require('fs');

_.str = require('underscore.string');
_.mixin(_.str.exports());

var FullGenerator = module.exports = function FullGenerator(args, options, config) {

    cgUtils.getNameArg(this,args);

    yeoman.generators.Base.apply(this, arguments);

};

util.inherits(FullGenerator, yeoman.generators.Base);

FullGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [];

    cgUtils.addNamePrompt(this,prompts,'full');

    this.prompt(prompts, function (props) {
        if (props.name){
            this.name = props.name;
        }
        cgUtils.askForModuleAndDir('full',this,false,cb);
    }.bind(this));

};

FullGenerator.prototype.files = function files() {

    cgUtils.processTemplates(this.name,this.dir,'full',this,null,null,this.module);

};
