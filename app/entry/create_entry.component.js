class CreateEntryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: '',
            messages: '',
            messageInputs: ['input-0'],
            successCreation: null
        };

        this.onCommentsChange = this.onCommentsChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onAddMessage = this.onAddMessage.bind(this);
        this.onPersonChange = this.onPersonChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
    }


    onAddMessage(e) {
        // todo - add message fields
        console.log('Adding message fields');
        e.preventDefault();

        let newMessageInput = `input-${this.state.messageInputs.length}`;
        this.setState({messageInputs: this.state.messageInputs.concat([newMessageInput])});
    }

    onCommentsChange(e) {
        this.setState({comments: e.target.value});
    }

    onPersonChange(e) {
        let message_id = e.target.id;
        let new_messages = {[message_id]: {...this.state.messages[message_id], person: e.target.value}};
        this.setState({messages: {...this.state.messages, ...new_messages}});
    }

    onMessageChange(e) {
        let message_id = e.target.id;
        let new_messages = {[message_id]: {...this.state.messages[message_id], message: e.target.value}};
        this.setState({messages: {...this.state.messages, ...new_messages}});
    }

    onSave(e) {
        e.preventDefault();

        let form_data = {
            comments: this.state.comments,
            messages: this.state.messages
        };

        const url = location.protocol + '//' + location.host + '/api/entry/create.php';

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form_data)
        })
            .then(response => response.json())
            .then(data => {
                this.setState({successCreation: data['message']});
                this.setState({comments: ''});
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                {
                    this.state.successCreation == 'Entry was created.' ?
                        <div className='alert alert-success'>Entry was saved</div>
                        : null
                }
                {
                    this.state.successCreation == 'Unable to create entry.' ?
                        <div className='alert alert-danger'>Unable to create entry, please try again</div>
                        : null
                }

                <a href='#'
                   onClick={() => this.props.changeAppMode('read')}
                   className='btn btn-primary margin-bottom-1em'> View Entries
                </a>

                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label htmlFor="comments">Comments</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            name="comments"
                            onChange={this.onCommentsChange}
                            value={this.state.comments}
                        ></textarea>
                    </div>
                    <div id="message_inputs">
                        {this.state.messageInputs.map(input => (
                                <CreateMessageComponent
                                    key={input}
                                    id={input}
                                    onPersonChange={this.onPersonChange}
                                    onMessageChange={this.onMessageChange}
                                />
                            )
                        )}
                    </div>
                    <button
                        className='btn btn-default'
                        onClick={this.onAddMessage}>Add Message
                    </button>
                    <div className="form-group">
                        <button
                            className='btn btn-primary'
                            type='submit'
                            onClick={this.onSave}>Save
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
