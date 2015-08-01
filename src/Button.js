/**
 * Button Component for tinglejs
 */

var classnames = require('classnames');

class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick() {
        !this.props.disabled && this.props.onClick();
    }

    render() {
        var size = this.props.size;
        var type = this.props.type;
        var small = size === 's';
        var medium = size === 'm';
        var large = size === 'l';
        var primary = type === 'primary';
        var secondary = type === 'secondary';
        var text = type === 'text';
        var disabled = !!this.props.disabled;
        var classSet = {
                [this.props.className]: !!this.props.className,
                'tButton tFAC': true,
                'tFS12 tPL16 tPR16': small,
                'tFS14': medium,
                'tFS18 tH44 tR5 tLH44': large,
                'tH30 tR4 tLH30': small || medium,
                'tBCc tFC9': disabled,
                'tButtonText': text,
                'tButtonPrimary tFCf': primary && !disabled,
                'tButtonSecondary tFC3': secondary && !disabled
            };
        
        return (
            <div className={classnames(classSet)} disabled={disabled} onClick={this.handleClick.bind(this)}>{this.props.children}</div>
        );
    }
}

Button.defaultProps = {
    size: 'l',
    type: 'primary',
    disabled: false,
    onClick() {}
}

// http://facebook.github.io/react/docs/reusable-components.html
Button.propTypes = {
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    size: React.PropTypes.string,
    type: React.PropTypes.string
}

module.exports = Button;