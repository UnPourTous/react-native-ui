import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import { themeble } from '../../theme'
import Touchable from '../base/touchable'
import merge from 'lodash.merge'

export default themeble()(class Button extends Component {
  static Types = {
    primary: 'primary',
    default: 'default',
    warn: 'warn'
  }
  static propsType = {
    children: PropTypes.oneOf([PropTypes.string, PropTypes.element]).isRequired,
    disabled: PropTypes.bool,

    style: PropTypes.style,

    onPress: PropTypes.func,
    type: PropTypes.oneOf(Object.keys(Button.Types))
  }

  static contextTypes = {
    theme: PropTypes.object.isRequired
  }

  render () {
    const {type = Button.Types.default} = this.props

    const {
      button: {
        [type]: {
          borderRadius,
          textColor,
          backgroundColor
        }
      } = {}
    } = this.context.theme || {}

    const {
      title,
      onPress,
      textStyle
    } = merge({}, this.props, this.context.theme, {})

    return (
      <Touchable
        pressMode={Touchable.PressMode.opacity}
        onPress={onPress}>
        <View
          style={[{
            borderRadius,
            height: 50,
            paddingLeft: 50,
            paddingRight: 50,
            backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
          }, styles, this.props.style]}>
          <Text style={[textStyle, {
            color: textColor
          }]}>{title}</Text>
        </View>
      </Touchable>
    )
  }
})

const styles = StyleSheet.create({
  primary: {
    backgroundColor: '#179B16'
  },
  default: {
    backgroundColor: '#F7F7F7'
  },
  warn: {
    backgroundColor: '#E64340'
  }
})
