class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        var $messageInput = $('#messageInput');
        var message = {message:  this.state.value, from: this.props.userName};
        this.state = {value: ''};
        $.ajax({
            type: 'POST',
            url: '/chat',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(message)
        })
    }

    post(url, data) {
        return $.ajax({
            type: 'POST',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="chat-message clearfix">
                    <input autoComplete="off" id="messageInput" placeholder="Type your message" value={this.state.value} onChange={this.handleChange}/>
                    <button type="submit">Send</button>
                </div>
            </form>
        );
    }
}