var React = require('react');
var ReactDOM = require('react-dom');
var Inspirator = require('Inspirator');

ReactDOM.render(
  <Inspirator
    date={(new Date()).toDateString()}
    message="Today is a wonderful day!"
  />,
  document.getElementById('main')
);
