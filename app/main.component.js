class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMode: 'read',
            entryId: null
        };

        this.changeAppMode = this.changeAppMode.bind(this);
    }

    changeAppMode(newMode, entryId){
        this.setState({currentMode: newMode});

        if (entryId !== undefined){
            this.setState({entryId: entryId});
        }
    }

    render() {
        let modeComponent = <ReadEntriesComponent changeAppMode={this.changeAppMode} />;

        switch (this.state.currentMode) {
            case 'read':
                break;
            case 'readOne':
                modeComponent = <ReadOneEntryComponent entryId={this.state.entryId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'create':
                modeComponent = <CreateEntryComponent changeAppMode={this.changeAppMode}/>;
                break;
            case 'update':
                modeComponent = <UpdateEntryComponent entryId={this.state.entryId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent = <DeleteEntryComponent entryId={this.state.entryId} changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }
        return modeComponent;
    }
}

ReactDOM.render(
    <MainApp/>,
    document.getElementById('content')
);