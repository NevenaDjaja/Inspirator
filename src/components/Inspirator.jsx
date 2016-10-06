var React = require('react');
var InspiratorMessage = require('InspiratorMessage');
var InspiratorForm = require('InspiratorForm');

var Inspirator = React.createClass({
  propTypes: {
    date: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      date: 'Any day',
      message: 'Today is a wonderful day!'
    }
  },
  getInitialState: function() {
    return {
      message: 'Today is a wonderful day!'
    }
  },
  handleNewMessage: function(message) {
    this.setState({
      message: message
    })
  },
  render: function() {
    const date = this.props.date;
    const message = this.state.message;
    return (
      <div>
        <InspiratorMessage date={date} message={message}/>
        <InspiratorForm onNewMessage={this.handleNewMessage}/>
        <img style={{marginTop: '20px'}} width="300" src="../assets/crogandboo.jpg"/>
      </div>
    );
  }
});

module.exports = Inspirator;
