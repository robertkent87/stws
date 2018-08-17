class CreateEntryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: '',
            successCreation: null
        };

        this.onCommentsChange = this.onCommentsChange.bind(this);
    }

    onCommentsChange(e) {
        this.setState({comments: e.target.value});
    }

    onSave(e) {
        e.preventDefault();

        let form_data = {
            comments: this.state.comments
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
                        <label htmlFor="comments"></label>
                        <textarea
                            className="form-control"
                            rows="3"
                            name="comments"
                            onChange={this.onCommentsChange}
                        >{this.state.comments}</textarea>
                    </div>
                    <div className="form-group">
                        <button
                            className='btn btn-primary'
                            onClick={this.onSave}>Save
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
