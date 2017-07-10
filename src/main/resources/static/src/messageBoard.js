class MessageBoard extends React.Component {

    componentDidUpdate() {
        const node = ReactDOM.findDOMNode(this.messagesEnd);
        node.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <div id="container">
                <div id="chat">
                    <ul id="messages">
                        {this.props.children}
                        <div ref={(el) => { this.messagesEnd = el; }} />
                    </ul>
                    <MessageForm userName={this.props.userName}></MessageForm>
                </div>
            </div>
        );
    }
}