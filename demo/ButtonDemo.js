
var Button = require('../src');

// TODO: move the line to tingle-env
React.initializeTouchEvents(true);

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Button tSize="large" tStyle="secondary" disabled >取 消</Button>
                <Button tSize="large" >提 交</Button>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));