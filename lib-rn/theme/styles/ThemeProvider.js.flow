import React, {Component} from 'react'
import PropTypes from 'prop-types'
import createTheme from './createTheme'

class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.element,
    theme: PropTypes.object
  }

  static childContextTypes = {
    theme: PropTypes.object.isRequired
  }

  getChildContext() {
    return {
      theme: this.props.theme || createTheme()
    }
  }

  render() {
    return this.props.children
  }
}

export default ThemeProvider