/**
 * Button Component for tinglejs
 */
class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick() {
        var onClick = this.props.onClick;
        onClick && onClick();
    }

    render() {
        var cx = React.addons.classSet;
        var size = this.props.tSize || 'large';
        var sizeMap = {
            'small': 'tF12 tH30 tR4',
            'medium': 'tF16 tH30 tR4',
            'large': 'tF18 tH44 tR5'
        };
        var style = this.props.tStyle || 'primary';
        var styleMap = {
            'primary': 'tBCPrimary tFf',
            'secondary': 'tSecondary tF3'
        };
        
        var classSet = {
            'tButton': true,
            'tFAC': true,
            [this.props.className]: !!this.props.className
        }

        classSet[sizeMap[size]] = true;
        classSet[styleMap[style]] = true;

        var disabled = this.props.disabled;
        if (disabled) {
            classSet['tOP50'] = true;
        }
        
        return (
            <button className={cx(classSet)} onClick={this.handleClick.bind(this)}>{this.props.children}</button>
        );
    }
}

Button.defaultProps = {
}

// http://facebook.github.io/react/docs/reusable-components.html
Button.propTypes = {
}

module.exports = Button;