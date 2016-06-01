# Weather App using React/Webpack/Axios/Zurb Foundation

## Getting Started

### Install Node.js && npm

If you're using Mac or Windows, you can use the installers from [nodejs.org](https://nodejs.org/). If you're using Linux, you can use the installer, or you can check [NodeSource's binary distributions](https://github.com/nodesource/distributions) to see whether or not there's a more recent version that works with your system.

Check Node version

	$ node -v
The version should be greater than or equal to v4.0.0

Check npm version

	$ npm -v
The version should be greater than or equal to v3.0.0

### Install all dependencies

	$ npm install

### Run the application
 This run Webpack and start express

	$ npm start

## Linting
### `$ npm run lint`

Runs eslint on all js and jsx files under app/ directory.

## Structure/Architecture

### Directories & Files

    ├─ src/
    │     ├─ index.html                 : app entry
    │     ├─ favicon.ico                : app favicon
    │     ├─ styles/                    : all sass/scss styles for the frontend
    │     │  └─main.css                 : entry for styles
    │     ├─ libs/                      : re-usable 3rd party libraries for front-end
    │     └─ scripts/                   : all CommonJS modules for front-end
    │        ├─ index.jsx               : entry; exports root view-controller
	│        ├─  config/                : configuration files for different environments
    │        └─ components/     	    : react components
	│      	    ├─ core/ 		    : a component of the app
	│      	    ├─ main/ 		    : a component of the app
	│        		└─[app-component]/ : a component of the app
	│           	├─ index.js         : entry point; exports view-controller
	│           	├─ actions.js       : reflux actions for component
	│           	├─ store.js         : reflux store for component
	│           	└─ views      	  : app views folder
    ├─ test/                       	 : folder for all test suites
    │ └─ e2e                     	   : end to end tests
    ├─ build/                 	      : folder for compiled output
    ├─ package.json              	   : node configuration file with list of 3rd party libraries and utilities
    └─ gulpfile.js               	   : gulp configuration file with list of build tasks

## Libraries

### Dependencies

| Library                                                 | Purpose                             |
| ------------------------------------------------------- | ------------------------------------- |
| [async](https://github.com/caolan/async)                |  Asynchronous JavaScript utility module |
| [griddle-react](http://griddlegriddle.github.io/Griddle/)| React grid component         				  |
| [jquery](http://jquery.com/)                            | For its utility methods               |
| [moment](http://momentjs.com/)                					| Time component for format to any-type       |
| [object-assign](https://github.com/sindresorhus/object-assign/)| Dependency for react-keep-state    |
| [react](http://facebook.github.io/react/)               | **View-controller layer**                 |
| [react-bootstrap](https://react-bootstrap.github.io/ )  | **Bootstrap framework rebuilt for React** |
| [react-checkbox-group](https://www.npmjs.com/package/react-checkbox-group)|**React package for checkbox working with the DOM** |
| [react-datepicker](https://www.npmjs.com/package/react-datepicker)| Date Picker component             |
| [react-dom](https://github.com/facebook/react/)         | **React package for working with the DOM**|
| [react-router](https://github.com/rackt/react-router/)  | Declarative routing                   |
| [react-simpletabs](https://github.com/pedronauck/react-simpletabs/)| Tabs component built with React  |
| [reflux](https://github.com/spoike/refluxjs)            | ** Uni-directional dataflow architecture**  |
| [underscore](http://underscorejs.org/)         					| Dependency for griddle-react                |

### Development Dependencies/Build Toolchain

| Library/Service                                                          | Purpose                                                                                        |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| [babel-jest](https://github.com/babel/babel-jest/)                       | Jest plugin for [Babel](https://babeljs.io/)                                                    |
| [babelify](https://github.com/babel/babelify/)                           | An ES6 to ES5 compiler with support for JSX                                                    |
| [browserify](http://browserify.org/)                                     | CommonJS module system                                                                         |
| [del](https://github.com/sindresorhus/del/)                              | Delete files/folders                                                                           |
| [envify](https://github.com/hughsk/envify)                               | Package and share environment variables with client                                                                          |
| [eslint](https://github.com/eslint/eslint/)                              | Pattern checker for JavaScript                                                                 |
| [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/) | React specific linting rules for ESLint                                                        |
| [gulp](http://gulpjs.com/)                                               | **Streaming build system**                                                                          |
| [gulp-webserver](https://github.com/schickling/gulp-webserver)           | Gulp plugin to run a local webserver with LiveReload                                           |
| [history](https://github.com/rackt/history)                              | Manage session history in browsers and  testing environments                                   |
| [jest-cli](https://github.com/facebook/jest)                             | **JavaScript Unit Testing built on top of the Jasmine test framework**                                   |
| [protractor](https://github.com/angular/protractor)                      | **End-to-end test framework built on top of the selenium's WebDriverJS**                                   |
| [react-addons-test-utils](http://facebook.github.io/react/docs/addons.html)| **React helpers for writing test cases** 										                                   |
| [run-sequence](https://github.com/OverZealous/run-sequence)              | Run a series of dependent gulp tasks in order                                                  |
| [spin.js](https://github.com/fgnass/spin.js)                             | An animated CSS3 loading spinner 	                                                 |
| [vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream)     | Use conventional text streams at the start of gulp for nicer interoperability with existing npm|
