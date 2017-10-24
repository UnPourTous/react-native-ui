import React, { Component, PropTypes } from 'react'
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import { themeble } from '../../theme'

class Button extends Component {
  static propsType = {
    title: PropTypes.string.isRequired,
    style: View.propTypes.style
  }

  // static defaultProps = {
  //   backgroundColor: '#20a0ff'
  // }

  static contextTypes = {
    theme: PropTypes.object.isRequired
  }

  render () {
    const {
      flatButton: {
        borderRadius,
        textColor,
        backgroundColor
      }
    } = this.context.theme

    const {
      title,
      onPress
    } = this.props

    return (
      <TouchableOpacity
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
          }, this.props.style]}>
          <Text style={{
            color: textColor
          }}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
export default themeble()(Button)
