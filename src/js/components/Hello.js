/** @jsx React.DOM */
var React = require('react');

class Hello extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
          name: "not clicked",
          clicked: false
    };
  }

  onClick() {
    if (!this.state.clicked) {
      this.setState( {name: "clicked", clicked: true });
      return
    }
    this.setState( {name: "not clicked", clicked: false });
  }

  render() {
    return <div onClick={ this.onClick.bind(this) } >{this.state.name}</div>;
  }
}

module.exports = Hello;
