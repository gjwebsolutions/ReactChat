function Message(props) {
    var fromNow = moment(props.msg.time).format('HH:mm:ss');
    return (
        <li className="clearfix" key={props.msg.time}>
            <div className={"message-data " + (props.msg.from === props.userName ? "align-left" : "align-right")}>
                <span className="message-data-name">{props.msg.from}</span>
                <span className="message-data-time">{fromNow}</span>
            </div>
            <div className={"message " + (props.msg.from === props.userName ? "my-message" : "other-message float-right")}>
                {props.msg.message}
            </div>
        </li>
    )
}