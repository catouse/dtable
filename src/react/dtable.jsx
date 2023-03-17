export default class DTable extends React.Component {
    #rootRef = React.createRef();

    componentDidMount() {
        new zui.DTable(this.#rootRef.current, this.props);
    }

    render() {
        return <div ref={this.#rootRef} style={{height: '100%'}}></div>;
    }

    static e(props) {
        return <DTable {...props} />;
    }
}
