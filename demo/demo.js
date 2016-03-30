const Button = require('../src');

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log(this);
  }

  render() {
    return (
      <div>
      <br/>
      <Button>默认按钮</Button> <br/>
      <br/>
      <Button type="primary" onClick={this.handleClick}>主 按 钮</Button> <br/>
      <Button type="secondary" onClick={this.handleClick}>次 按 钮</Button> <br/>
      <Button type="danger" onClick={this.handleClick}>警告按钮</Button> <br/>
      <Button type="text" onClick={this.handleClick}>纯文本</Button> <br/>
      <br/>
      <Button type="primary" size="medium" onClick={this.handleClick}>中按钮</Button> <br/>
      <Button type="primary" size="large" onClick={this.handleClick}>大按钮</Button> <br/>
      <Button type="primary" size="small" onClick={this.handleClick}>小按钮</Button> <br/>
      <br/>
      <Button disabled={true}>不可点击</Button> <br/>
      <Button disabled={true} type="text">纯文本不可点击</Button> <br/>
      <Button disabled={true} size="small">不可点击</Button> <br/>
      <br/>
      <Button type="illegle">非法的Type</Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('TingleDemo'));
