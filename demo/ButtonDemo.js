
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
        console.log('onClick')
    }
    render() {
        return (
            <div>
                <div className="demo"><Button size="l" onClick={this.handleClick}>提 交</Button></div>
                <div className="demo"><Button size="m" onClick={this.handleClick}>提 交</Button></div>
                <div className="demo"><Button size="s" onClick={this.handleClick}>提 交</Button></div>
                <div className="demo"><Button type="primary" onClick={this.handleClick}>提 交</Button></div>
                <div className="demo"><Button type="secondary" onClick={this.handleClick}>取 消</Button></div>
                <div className="demo"><Button disabled={true} onClick={this.handleClick}>提 交</Button></div>
                <div className="demo"><Button disabled={true} onClick={this.handleClick} type="text">提 交</Button></div>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));