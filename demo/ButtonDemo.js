
var Button = require('../src');

// TODO: move the line to tingle-env
React.initializeTouchEvents(true);

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleClick() {
    }
    render() {
        return (
            <div>
                <Button tSize="large" tStyle="secondary" disabled onClick={this.handleClick}>取 消</Button>
                <Button tSize="large" onClick={this.handleClick}>提 交</Button>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));