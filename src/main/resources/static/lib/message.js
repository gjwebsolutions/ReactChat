function Message(props) {
    var fromNow = moment(props.msg.time).format('HH:mm:ss');
    return React.createElement(
        "li",
        { className: "clearfix", key: props.msg.time },
        React.createElement(
            "div",
            { className: "message-data " + (props.msg.from === props.userName ? "align-left" : "align-right") },
            React.createElement(
                "span",
                { className: "message-data-name" },
                props.msg.from
            ),
            React.createElement(
                "span",
                { className: "message-data-time" },
                fromNow
            )
        ),
        React.createElement(
            "div",
            { className: "message " + (props.msg.from === props.userName ? "my-message" : "other-message float-right") },
            props.msg.message
        )
    );
}