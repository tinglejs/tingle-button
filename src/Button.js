/**
 * Button Component for tingle
 * @author minjie.lmj
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick(e) {
        !this.props.disabled && this.props.onClick(e);
    }

    render() {
        let size = this.props.size;
        let type = this.props.type;
        let primary = type === 'primary';
        let secondary = type === 'secondary';
        let danger = type === 'danger';
        let text = type === 'text';
        let disabled = !!this.props.disabled;
        let classSet = {
            [this.props.className]: !!this.props.className,
            'tButton tFAC': true,
            'tTE': !disabled,
            'tButtonSmall': size === "s",
            'tButtonMedium': size === "m",
            'disable': disabled,
            'tButtonPrimary': primary && !disabled,
            'tButtonSecondary': secondary && !disabled,
            'tButtonDanger': danger && !disabled
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
    onClick() {
    }
};

// http://facebook.github.io/react/docs/reusable-components.html
Button.propTypes = {
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    type: React.PropTypes.string,
    size: React.PropTypes.string
};

Button.displayName = 'Button';

module.exports = Button;