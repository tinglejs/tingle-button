let classnames = require('classnames')
let Button = React.createClass({
  propTypes: {
    size: React.PropTypes.oneOf(['medium', 'large', 'small']),
    type: React.PropTypes.oneOf(['primary', 'secondary', 'danger', 'text']),
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      size: 'medium',
      type: 'primary',
      disabled: false,
      onClick() {}
    }
  },

  handleClick() {
    if (!this.props.disabled) {
      this.props.onClick()
    }
  },

  render() {
    let size = this.props.size

    let type = this.props.type
    let primary = type === 'primary'
    let secondary = type === 'secondary'
    let danger = type === 'danger'
    let text = type === 'text'

    let disabled = !!this.props.disabled
    let classSet = {
      [this.props.className]: !!this.props.className,
      'btn': true,
      'disabled': !disabled,
      'btn-small': size === 'small',
      'btn-large': size === 'large',
      'disabled': disabled,
      'btn-primary': primary && !disabled,
      'btn-secondary': secondary && !disabled,
      'btn-danger': danger && !disabled,
      'btn-text': text
    }

    return (
      <button
        className={classnames(classSet)}
        disabled={disabled}
        onClick={this.handleClick}>
        {this.props.children}
      </button>
    )
  }
})

export default Button
