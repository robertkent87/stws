class ReadEntriesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: []
        };
    }

    componentDidMount() {
        const url =  location.protocol + '//' + location.host+'/api/entry/read.php';

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                entries: data.records
            }))
            .catch(error => console.error(error));
    }

    render() {
        $('.page-header h1').text('All entries');
        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />
                <EntriesList
                    entries={this.state.entries}
                    changeAppMode={this.props.changeAppMode}
                />
            </div>
        );
    }
}