import React, {Component} from 'react'
import {
  View
} from 'react-native'

export default class Button extends Component {
  render () {
    return (
      <View style={[{backgroundColor: 'red', width: 100, height: 100}, this.props.style]}></View>
    )
  }
}

