/**
 * Button Component for tinglejs
 */

let classnames = require('classnames');

class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick() {
        !this.props.disabled && this.props.onClick();
    }

    render() {
        let size = this.props.size;
        let type = this.props.type;
        let small = size === 's';
        let medium = size === 'm';
        let large = size === 'l';
        let primary = type === 'primary';
        let secondary = type === 'secondary';
        let text = type === 'text';
        let disabled = !!this.props.disabled;
        let classSet = {
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
};

// http://facebook.github.io/react/docs/reusable-components.html
Button.propTypes = {
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    size: React.PropTypes.string,
    type: React.PropTypes.string
};

Button.displayName = 'Button';

module.exports = Button;