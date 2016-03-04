Incentro Front-end Incubator
============================
Front-end project for online development.
This project is based on the [Incentro Front-end Incubator](https://bitbucket.org/incentro-ondemand/frontend-incubator) project.



Project deliverables
--------------------

* **Assets** Static files needed to render the layout and interaction of the project.
* **Site** Sample website with reference html implementation for back-end.
* **Pattern library** Html snippets documenting how to implement separate parts of this front-end project


Getting started
---------------

### Quickstart

1. This project uses [SASS](http://sass-lang.com/ "CSS With superpowers"),
   [Node.js](http://nodejs.org/, "Javascript development made awesome") and
   [gulp](http://gulpjs.com/ "gulp.js, The stream build system") to automate development.
   Please take a look at the Build dependencies section in this readme to make sure the
   correct versions are installed.

2. Install development dependencies
   `npm install`

3. Use any of the build commands described below, for example:

   `gulp compile --minify` - to create a production ready build of the Front-end code.
4. Paths and other configurations are set in the `config.json` file.



### Build dependencies

Make sure the following dependencies are installed before using the build system.

Name      | Version | Description                                    | Quick install
----------|---------|------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
SCSS Lint | 0.40.1  | Validates SCSS with check style                | After installing SASS, also install this with `gem install scss_lint`
Node.js   | 5.3.x   | Used to automate builds of project             | **Windows:** download and install via the [Node.js](http://nodejs.org/) website. **Mac:** **1.** Install [Homebrew](http://brew.sh/) **2.** run `brew install node`
Npm       | 3.5.x   | Manages Node.js dependencies                   | Automatically installed when installing Node.js. Use the command `npm update npm -g` to update version if needed. Check troubleshooting section if having troubles updating on a Windows machine.
Gulp      | 3.x     | Build tool to define build tasks               | **1.** Install Npm and NodeJs **2.** run `npm install -g gulp` on commandline

Please look at the troubleshooting section if you are having trouble installing dependencies.


Coding conventions
------------------

#### Javascript
It is recommended to use the [google javascript style guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml) as a base for coding style.

#### SCSS ( CSS )
Currently the [docssa](http://docssa.info/) system is being implemented as a CSS architecture.

Docssa uses BEM for class naming. BEM stands for Block, element, modifier.

 * Blocks are written in lowerCamelCase.
 * Elements are seperated from the parent block with 1 underscore and are also written in lowerCamelCase.
 * Modifiers are seperated from the block/element by 2 hyphen.
 * States (active, current etc.) are written in lowercase, always prefixed with: '_is_'.
For extensive documentation, view the [BEM](https://en.bem.info/method/) or the [docssa](http://docssa.info/) website.

Example:
.mainHeader
    .mainHeader_item
    .mainHeader_item--highlighted
    .mainHeader_item
    .mainHeader_item._is_active



Build commands
--------------

### Install build dependencies
This projects relies on NPM and bower for dependency management.

    npm install


### Building the project
Gulp is used to create a build version of the project.

    gulp compile

Use the `--minify` modifier to create a production ready/minified version of the project.

    gulp compile --minify

Please read the comments in `gulpfile.js` for a detailed description of the build steps used or execute:

    gulp help


### Development
Build the project, and run development server, a webbrowser will be opened with the build result. A new build will be reloaded automatically when changing `src` files

    gulp serve


### Clean environment
Some code changes require the build cache to be cleared. You can use the following command:

    gulp clean



#### Configuration
- `package.json` development dependencies installed by `npm install` command
- `gulpfile.js` build process managed by gulp. Look into the [gulp documentation](https://github.com/gulpjs/gulp/blob/master/README.md#gulp-----) for configuration options.



Directory structure
-------------------

* _src_ - project source files, does not include vendor packages
	* _asset_ - Front-end dependency needed in order to implement html
		* _font_ - fonts enabled in css
		* _image_ - images used in layout
		* _javascript_ - browserify enabled javascript (please look into bower.json for dependencies)
		* _scss_ - styling files, structure based on DoCSSa
	* _site_ - prototype site displaying
		* _template_ - templates needing to be rendered by swig
		* _webroot_ - static files needing to be available in prototype
			* _static_ - sample files, normally managed by the cms
	* _pattern_library_ -
		* _template_ - kss handlebars template to render pattern library


Troubleshooting
---------------

### Running `npm install` on windows gives errors with `node-gyp`
In order to use the build:live preview functionality on windows you need to install Visual C++ runtime libraries.
More information on this issue can be found in the [browser sync documentation](http://www.browsersync.io/docs/#windows-users)

### Updating NPM on windows
In some situations the windows permission scheme will prevent an upgrade of npm via the `npm update npm -g` command.
Use the following steps to fix this:

1. Open a command window with Administrator permissions
2. Navigate to the installation directory of Node.js ( most likely `c:\Program Files\nodejs` or `c:\Program Files (x86)\nodejs` )
3. Run `npm install npm`
