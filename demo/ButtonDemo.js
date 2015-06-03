
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
                <div className="demo"><Button tSize="large" onClick={this.handleClick}>提 交</Button></div>
                <div className="demo"><Button tSize="medium" onClick={this.handleClick}>提 交</Button></div>
                <div className="demo"><Button tSize="small" onClick={this.handleClick}>提 交</Button></div>
                <div className="demo"><Button tStyle="primary" onClick={this.handleClick}>提 交</Button></div>
                <div className="demo"><Button tStyle="secondary" onClick={this.handleClick}>取 消</Button></div>
                <div className="demo"><Button disabled onClick={this.handleClick}>提 交</Button></div>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));