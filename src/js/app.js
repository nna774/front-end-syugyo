/** @jsx React.DOM */
var Hello = require('./components/Hello');
var React = require('react');
var ReactDOM = require('react-dom');

const root = 'root';

ReactDOM.render(
  <Hello />,
  document.getElementById(root)
);
