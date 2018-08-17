class EntriesList extends React.Component {

    render() {
        let rows = this.props.entries
            .map((entry, i) => {
                return (
                    <EntryRow
                        key={i}
                        entry={entry}
                        changeAppMode={this.props.changeAppMode}
                    />
                );
            });
        return (
            !rows.length
                ? <div className='alert alert-danger'>No entries found</div>
                : <section>{rows}</section>
        );
    }

}