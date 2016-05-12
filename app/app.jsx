var React = require('react');
var ReactDOM = require('react-dom');

var one = {
  name: 'marius',
  location: 'kigali'
};

var two = {
  age: '34',
  ...one
};

ReactDOM.render(
  <h1>react boilerplate</h1>,
  document.getElementById('app')
)
