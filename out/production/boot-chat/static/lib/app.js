class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numMessages: 0,
            messages: [],
            userName: ''
        };

        this.connectWebSocket();
    }

    connectWebSocket() {
        var socket = new SockJS('/chatWS');
        var stompClient = Stomp.over(socket);
        //stompClient.debug = null;
        stompClient.connect({}, frame => {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/messages', result => {
                var message = JSON.parse(result.body);
                this.state.messages.push(message);
                this.setState({
                    messages: this.state.messages
                });
            });
        });
    }

    componentDidMount() {
        $.get('/chat').done(messages => {
            this.setState({
                messages: messages
            });
        });
        var userName = window.prompt("Enter your name", "some user");
        //var userName = "lol";
        this.setState({ userName: userName });
    }

    render() {
        var messageComponents = [];
        for (var i = 0; i < this.state.messages.length; i += 1) {
            messageComponents.push(React.createElement(Message, { msg: this.state.messages[i], userName: this.state.userName, key: 'msg' + i }));
        }

        return React.createElement(
            MessageBoard,
            { userName: this.state.userName },
            messageComponents
        );
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));