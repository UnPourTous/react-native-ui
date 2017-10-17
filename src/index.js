import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native-web'

export default class Button extends Component {
  // static propsType = {
  //   title: PropTypes.string.isRequired,
  //   backgroundColor: PropTypes.string
  // }

  // static defaultProps = {
  //   backgroundColor: '#20a0ff'
  // }

  render () {
    const {
      title,
      backgroundColor = '#20a0ff',
      onPress
    } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}>
        <View
          style={{
            flex: 1,
            height: 50,
            backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
