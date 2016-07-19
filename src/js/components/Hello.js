/** @jsx React.DOM */
var React = require('react');
var Hello = React.createClass({
  getInitialState: function () {
      return {
          name: "not clicked",
          clicked: false
      };
  },
  onClick: function () {
    if (!this.state.clicked) {
      this.setState( {name: "clicked", clicked: true });
      return
    }
    this.setState( {name: "not clicked", clicked: false });
  },
  render: function() {
    return <div onClick={ this.onClick } >{this.state.name}</div>;
  }
});

module.exports = Hello;
