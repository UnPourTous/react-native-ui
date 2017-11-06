import React, { Component } from 'react'
import TouchableHighlight from './TouchableHighlight'
import TouchableOpacity from './TouchableOpacity'
import TouchableMask from './TouchableMask'
import _ from 'lodash'
const keyMirror = require('fbjs/lib/keyMirror')

export default class Touchable extends Component {
  static PressMode = keyMirror({
    opacity: null,
    highlight: null,
    mask: null,
    none: null
  })

  static propTypes = {
    activeOpacity: React.PropTypes.number,
    onPress: React.PropTypes.func.isRequired,
    backgroundColor: React.PropTypes.string,
    pressMode: React.PropTypes.oneOf(Object.values(Touchable.PressMode)),

    // highlight
    activeColor: React.PropTypes.string,
    activeType: React.PropTypes.string
  }

  render () {
    let {
      onPress = () => {},
      throttleOnPress = true
    } = this.props
    if (throttleOnPress) {
      onPress = _.throttle(onPress, 300, {trailing: false})
    }
    switch (this.props.pressMode) {
      case Touchable.PressMode.highlight:
        return (
          <TouchableHighlight {...this.props} onPress={onPress}>
            {this.props.children}
          </TouchableHighlight>
        )
      case Touchable.PressMode.mask:
        return (
          <TouchableMask {...this.props} onPress={onPress}>
            {this.props.children}
          </TouchableMask>
        )
      case Touchable.PressMode.none: {
        const props = {
          ...this.props,
          activeOpacity: 1
        }
        return (
          <TouchableOpacity {...props} onPress={onPress}>
            {this.props.children}
          </TouchableOpacity>
        )
      }
      default:
        return (
          <TouchableOpacity {...this.props} onPress={onPress}>
            {this.props.children}
          </TouchableOpacity>
        )
    }
  }
}
