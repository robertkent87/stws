class EntryRow extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className='messages'>
                        {this.props.entry.messages.map((message, i) => {
                            return (
                                <p key={i}><span className="label label-primary">{message.person}</span> {message.message}</p>
                            );
                        })}
                    </div>
                    <p><em>Comments: {this.props.entry.comments}</em></p>
                </div>
                <div className="panel-footer">
                    {this.props.entry.date_created}
                </div>
            </div>
        );
    }
}