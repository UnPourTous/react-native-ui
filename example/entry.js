/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'
import {
  Button,
  createTheme,
  ThemeProvider,
  DarkTheme,
  LightTheme
} from '@unpourtous/react-native-ui'
import CustomTheme from './CustomTheme'

export default class example extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ThemeProvider theme={createTheme(DarkTheme)}>
          <Button
            style={{marginTop: 10}}
            title={'Button(DarkTheme)'}
            onPress={() => {
              console.log('onPress')
            }} />
        </ThemeProvider>

        <ThemeProvider theme={createTheme(LightTheme)}>
          <Button
            style={{marginTop: 10}}
            title={'Button(LightTheme)'}
            onPress={() => {
              console.log('onPress')
            }} />
        </ThemeProvider>

        <ThemeProvider theme={createTheme(CustomTheme)}>
          <Button
            style={{marginTop: 10}}
            title={'Button(CustomTheme)'}
            onPress={() => {
              console.log('onPress')
            }} />
        </ThemeProvider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEA'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('example', () => example)
