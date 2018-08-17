class EntryRow extends React.Component {
    render() {
        return (
            <div>
                <p>Date: {this.props.entry.date_created}</p>
                <div className='messages'>
                    {this.props.entry.messages.map((message, i) => {
                        return (
                            <p key={i}><strong>{message.person}:</strong> {message.message}</p>
                        );
                    })}
                </div>
                <p>Comments: {this.props.entry.comments}</p>
            </div>
        );
    }
}