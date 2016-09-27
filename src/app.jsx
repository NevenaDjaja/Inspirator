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
        <p>{message}</p>
      </div>
    );
  }
});

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
        <InspiratorMessage date={date} message={message} />
        <InspiratorForm onNewMessage={this.handleNewMessage}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Inspirator
    date={(new Date()).toDateString()}
    message="Today is a wonderful day!"
  />,
  document.getElementById('main')
);
