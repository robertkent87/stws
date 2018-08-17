class EntryRow extends React.Component {
    render() {
        return (
            <div>
                <p>Date: {this.props.date_created}</p>
                <div className='messages'>
                    {this.props.messages.map((message, i) => {
                        return (
                            <p><strong>{message.person}:</strong> {message.message}</p>
                        );
                    })}
                </div>
                <p>Comments: {this.props.comments}</p>
            </div>
        );
    }
}