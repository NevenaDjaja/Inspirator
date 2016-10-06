var React = require('react');

var InspiratorMessage = React.createClass({
  propTypes: {
    message: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired
  },
  render: function() {
    const date = this.props.date;
    const message = this.props.message;
    return (
      <div>
        <h1>Inspiration on {date}</h1>
        <p style={{fontSize: '32px'}}>{message}</p>
      </div>
    );
  }
});

module.exports = InspiratorMessage;
