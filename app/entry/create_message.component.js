class CreateMessageComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="person">Person</label>
                    {/* TODO MAKE THIS AN ARRAY */}
                    <input type="text" className="form-control" name="person[]" id={this.props.id} onChange={this.props.onPersonChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    {/* TODO MAKE THIS AN ARRAY */}
                    <input type="text" className="form-control" name="message[]" id={this.props.id} onChange={this.props.onMessageChange} />
                </div>
            </div>
        );
    }
}