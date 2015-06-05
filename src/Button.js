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
            classSet = {
                'tButton tFAC': true,
                'tOP50': !!this.props.disabled,
                [this.props.className]: !!this.props.className,
                'tF12': small,
                'tF16': medium,
                'tF18 tH44 tR5': large,
                'tH30 tR4': small || medium,
                'tButtonPrimary tFf': primary,
                'tButtonSecondary tF3': secondary
            };

        
        return (
            <button className={cx(classSet)} onClick={this.handleClick.bind(this)}>{this.props.children}</button>
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