var React = require('react');

var InspiratorForm = React.createClass({
  propTypes: {
    onNewMessage: React.PropTypes.func.isRequired
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var message = this.refs.message.value;
    this.refs.message.value = '';

    if (typeof message === 'string' && message.length > 0) {
      this.props.onNewMessage(message);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          style={{height: '100px', width: '294px'}}
          type="text"
          ref="message"
          placeholder="inspiring message"
          >
        </textarea>
        <br/>
        <button>
          Set message
        </button>
      </form>
    )
  }
});

module.exports = InspiratorForm;
