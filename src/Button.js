/**
 * Button Component for tinglejs
 */
class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick() {
        !this.props.disabled && this.props.onClick();
    }

    render() {
        var cx = React.addons.classSet,
            size = this.props.size,
            type = this.props.type,
            small = size === 's',
            medium = size === 'm',
            large = size === 'l',
            primary = type === 'primary',
            secondary = type === 'secondary',
            text = type === 'text',
            disabled = !!this.props.disabled,
            classSet = {
                'tButton tFAC': true,
                [this.props.className]: !!this.props.className,
                'tF12': small,
                'tF14': medium,
                'tF18 tH44 tR5': large,
                'tH30 tR4': small || medium,
                'tBCc tF9': disabled,
                'tButtonText': text,
                'tButtonPrimary tFf': primary && !disabled,
                'tButtonSecondary tF3': secondary && !disabled
            };

        
        return (
            <button className={cx(classSet)} disabled={disabled} onClick={this.handleClick.bind(this)}>{this.props.children}</button>
        );
    }
}

Button.defaultProps = {
    size: 'l',
    type: 'primary',
    disabled: false,
    onClick: function () {}
}

// http://facebook.github.io/react/docs/reusable-components.html
Button.propTypes = {
    disabled: React.PropTypes.bool
}

module.exports = Button;