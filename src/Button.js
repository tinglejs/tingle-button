/**
 * Button Component for tinglejs
 */
class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick() {
        var disabled = this.props.disabled;

        !disabled && this.props.onClick();
    }

    render() {
        var cx = React.addons.classSet,
            size = this.props.size,
            feature = this.props.feature,
            small = size === 'small',
            medium = size === 'medium',
            large = size === 'large',
            primary = feature === 'primary',
            secondary = feature === 'secondary',
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
    'size': 'large',
    'feature': 'primary',
    onClick: function () {}
}

// http://facebook.github.io/react/docs/reusable-components.html
Button.propTypes = {
}

module.exports = Button;