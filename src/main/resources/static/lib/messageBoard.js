class MessageBoard extends React.Component {

    componentDidUpdate() {
        const node = ReactDOM.findDOMNode(this.messagesEnd);
        node.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return React.createElement(
            "div",
            { id: "container" },
            React.createElement(
                "div",
                { id: "chat" },
                React.createElement(
                    "ul",
                    { id: "messages" },
                    this.props.children,
                    React.createElement("div", { ref: el => {
                            this.messagesEnd = el;
                        } })
                ),
                React.createElement(MessageForm, { userName: this.props.userName })
            )
        );
    }
}