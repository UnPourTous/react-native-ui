import {
  TouchableWithoutFeedback,
  View
} from 'react-native'
import React, { Component } from 'react'

let CHILD_REF = 'childRef'

export default class extends Component {
  static propTypes = {
    activeColor: React.PropTypes.string,
    activeType: React.PropTypes.string
  }

  constructor (props) {
    super(props)
    this.style = this.props.children && this.props.children.props ? this.props.children.props.style : null
    this.state = {
      active: false
    }

    this.highlight = this._highlight.bind(this)
    this.reset = this._reset.bind(this)
  }

  _highlight () {
    this.setState({active: true})
  }

  _reset () {
    this.setState({active: false})
  }

  render () {
    return (
      <TouchableWithoutFeedback {...this.props} onPressIn={() => {
        if (this.props.onPressIn) {
          this.props.onPressIn()
        }
        this.highlight()
      }} onPressOut={() => {
        if (this.props.onPressOut) {
          this.props.onPressOut()
        }
        this.reset()
      }}>
        <View>
          {React.cloneElement(
            React.Children.only(this.props.children),
            {
              ref: CHILD_REF,
              style: [
                this.style,
                this.state.active ? {
                  backgroundColor: this.props.activeColor ? this.props.activeColor : this.props.activeType === 'dark' ? '#1D2027' : '#f5f5f5'} : null]
            }
          )}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
