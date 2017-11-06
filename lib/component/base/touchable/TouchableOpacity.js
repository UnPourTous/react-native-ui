import {
  TouchableOpacity,
  View
} from 'react-native'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    activeOpacity: PropTypes.number,
    onPress: PropTypes.func.isRequired
  }
  static defaultProps = {
    activeOpacity: 0.6,
    type: 'opacity'
  }

  render () {
    return (
      <TouchableOpacity
        {...this.props}
        activeOpacity={this.props.activeOpacity || TouchableOpacity.defaultProps.activeOpacity}>
        {this.props.disabled ? <View style={{opacity: 0.3}}>{this.props.children}</View> : this.props.children}
      </TouchableOpacity>
    )
  }
}
