'use strict';
var yo = require('yeoman-generator'),
	chalk = require('chalk'),
	yosay = require('yosay'),
	mkdirp = require('mkdirp'),
	path = require('path'),
	config = require('./config.json');

module.exports = yo.generators.Base.extend({
	constructor: function(arg, options) {
		yo.generators.Base.apply(this, arguments);
		this.settings = config;
	},
	prompting: function () {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the ' + chalk.red('frontend-incubator') + ' generator!'
		));

		var prompts = [{
			name: 'projectName',
			message: 'What is the name of your project?',
			default: path.basename(process.cwd())
		}, {
			name: 'projectVersion',
			message: 'What is version of your project?',
			default: '1.0.0'
		}, {
			name: 'useDefaultConfig',
			message: 'Would you like to use the default incubator configuration?',
			default: true,
			type: 'confirm'
		}, {
			name: 'es2015orLoose',
			message: 'Which babel do you want to use?',
			default: 'es2015-loose',
			type: 'list',
			choices: [{
				name: 'es2015-loose',
				value: 'es2015-loose'
			},{
				name: 'es2015',
				value: 'es2015'
			}]
		}];

		this.prompt(prompts, function (props) {
			this.props = props;


			// To access props later use this.props.someOption;

			done();
		}.bind(this));
	},

	writing: function () {

		if (!this.props.useDefaultConfig) {
			console.log('This feature is not yet implemented. Using default instead');
		}

		this.fs.copyTpl(
			this.templatePath('_package.json'),
			this.destinationPath('package.json'), {
				name: this.props.projectName,
				version: this.props.projectVersion
			}
		);

		this.fs.copyTpl(
			this.templatePath('_config.json'),
			this.destinationPath('config.json'), {
				paths: this.settings.paths,
				esVersion: this.props.es2015orLoose
			}
		);
	},

	install: function () {
		//this.installDependencies({bower: false});
	}
});
