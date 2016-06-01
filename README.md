# A Weather App using React

### Install all dependencies

Using [npm](https://www.npmjs.com/):

	$ npm install

### Run the application
 This run Webpack and start express

	$ npm start

## Linting

	$ npm run lint

Runs eslint on all js and jsx files under app/ directory.

## Structure/Architecture

### Directories & Files


	├─ app/
    │     ├─ api/						: third party API related components
    │        ├─ googleMap.jsx			: custom component for googleMap API
	│        └─ openWeatherMap.jsx		: custom component for openWeatherMap API
    │     └─ components/				: react components
	│        ├─ About.jsx				: presentational component for About page
	│        ├─ ErrorModal.jsx			: component for Error Modal
	│        ├─ Examples.jsx			: presentational component for Examples page
	│        ├─ Main.jsx				: main component of the app
	│        ├─ Map.jsx					: component that shows a selected city on a Map
	│        ├─ Nav.jsx					: navigation component
	│        ├─ Weather.jsx				: weather component
	│        ├─ WeatherForm.jsx			: form component for weather
	│        └─ WeatherMessage.jsx		: weather message component
	│     ├─ styles/					: all sass/scss styles for the frontend
	│     │  └─app.scss                 : entry for styles
	│     └─ app.jsx					: root view-controller
    ├─ public/							: folder for bundle output
    ├─ package.json						: node configuration file with list of 3rd party libraries and utilities
	├─ server.js						: express server
	├─ webpack.config.js				: webpack configuration file
    └─ .eslintrc						: eslint configuration file

## Libraries

### Dependencies

| Library                                                 | Purpose                             |
| ------------------------------------------------------- | ------------------------------------- |
| [axios](https://github.com/mzabriskie/axios)            | Promise based HTTP client for the browser and Node.js      |
| [express](https://github.com/expressjs/express/)				| Fast, unopinionated, minimalist web framework for Node.js    |
| [react](http://facebook.github.io/react/)               | View-controller layer                 |
| [react-dom](https://github.com/facebook/react/)         | React package for working with the DOM  |
| [react-google-maps](https://github.com/tomchentw/react-google-maps/)| React.js Google Maps integration component|
| [react-router](https://github.com/rackt/react-router/)  | Routing library for React                  |

### Development Dependencies

| Library/Service                                                          | Purpose                                                                                        |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| [babel-loader](https://github.com/babel/babel-loader/)                     | Webpack plugin for Babel. It  allows transpiling JavaScript files using Babel and webpack.                                                  
| [babel](https://github.com/babel/babel/)                              | A compiler for writing next generation JavaScrip (babel-preset-stage-0/babel-preset-react/babel-preset-es2015)                                                                 |
| [css-loader](https://github.com/webpack/css-loader/) | A css loader module for webpack                                                       |
| [foundation-sites](https://github.com/zurb/foundation-sites/)        | A responsive front-end framework                                                                        |
| [jquery](https://github.com/jquery/jquery/)           | jQuery JavaScript Library                                          |
| [node-sass](https://github.com/sass/node-sass/)                    | Node-sass is a library that provides binding for Node.js to LibSass                                   |
| [sass-loader](https://github.com/jtangelder/sass-loader/)   | A SASS loader for Webpack                    |
| [script-loader](https://github.com/webpack/script-loader/)                      | A script loader module for webpack                                  |
| [style-loader](https://github.com/webpack/style-loader/)| A style loader module for webpack										                                   |
| [webpack](https://github.com/webpack/webpack/)              | A bundler for javascript. Packs many modules into a few bundled assets                                                 |
