# Button 按钮 [![npm version](https://badge.fury.io/js/tingle-button.svg)](http://badge.fury.io/js/tingle-button)

## TL;DR

效果图:

![效果图](http://gtms02.alicdn.com/tps/i2/TB1aLpEIVXXXXbZapXXdRBY6FXX-334-485.png_200x200.jpg)

## Simple Usage

```
<div className="demo"><Button type="primary" onClick={this.handleClick}>主按钮</Button></div>
<div className="demo"><Button type="secondary" onClick={this.handleClick}>次按钮</Button></div>
<div className="demo"><Button type="danger" onClick={this.handleClick}>警告按钮</Button></div>
<div className="demo"><Button disabled={true}></Button></div>
```

## 可用配置

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|disabled| optional |false|按钮失效|
|type| optional |primary|按钮的类型, 可选的参数primary、secondary、danger|
|onClick|optional|-|按钮点击时的回调|


## Links 相关链接

- [Fire a bug/Issues 提Bug](https://github.com/tinglejs/tingle-button/issues)