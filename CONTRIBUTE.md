## Setup
``` shell
git clone --recursive https://github.com/UnPourTous/react-native-ui.git
```

``` shell
cd react-native-ui
yarn
```

## run website 
``` shell 
npm run website
```

## Hava a try 
http://localhost:3000/web-player/#vendorComponents=%5B%5B%22react-native-ui%22%2C%20%22http%3A%2F%2Flocalhost%3A3000%2Findex.web.js%22%5D%5D&code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%0A%20%20AppRegistry%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20View%0A%7D%20from%20'react-native'%0A%0Aimport%20%7B%0A%20%20%20Button%2C%0A%20%20createTheme%2C%0A%20%20ThemeProvider%2C%0A%20%20DarkTheme%2C%0A%20%20LightTheme%0A%7D%20from%20'react-native-ui'%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CThemeProvider%20theme%3D%7BcreateTheme(DarkTheme)%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7BmarginTop%3A%2010%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%7B'Button'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('onPress')%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FThemeProvider%3E%0A%0A%20%20%20%20%20%20%20%20%3CThemeProvider%20theme%3D%7BcreateTheme(LightTheme)%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7BmarginTop%3A%2010%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%7B'Button'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('onPress')%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FThemeProvider%3E%0A%20%20%20%20%20%20%20%20%20%20%3CThemeProvider%20theme%3D%7BcreateTheme(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fontFamily%3A%20'Roboto%2C%20sans-serif'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20palette%3A%20%7B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20primaryColor%3A%20'%23FD8'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20textColor%3A%20'black'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D)%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7BmarginTop%3A%2010%7D%7D%20%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%7B'Button'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('onPress')%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FThemeProvider%3E%20%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20backgroundColor%3A%20'%23EEA'%0A%20%20%7D%2C%0A%20%20welcome%3A%20%7B%0A%20%20%20%20fontSize%3A%2020%2C%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20margin%3A%2010%0A%20%20%7D%2C%0A%20%20instructions%3A%20%7B%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20color%3A%20'%23333333'%2C%0A%20%20%20%20marginBottom%3A%205%0A%20%20%7D%0A%7D)%20%0A%0AAppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)

## source code 
``` js
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import {
   Button,
  createTheme,
  ThemeProvider,
  DarkTheme,
  LightTheme
} from 'react-native-ui'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ThemeProvider theme={createTheme(DarkTheme)}>
          <Button
            style={{marginTop: 10}}
            title={'Button'}
            onPress={() => { 
              console.log('onPress')
            }} />
        </ThemeProvider>

        <ThemeProvider theme={createTheme(LightTheme)}>
          <Button
            style={{marginTop: 10}}
            title={'Button'}
            onPress={() => {
              console.log('onPress')
            }} />
        </ThemeProvider>
          <ThemeProvider theme={createTheme({
            fontFamily: 'Roboto, sans-serif',
            borderRadius: 30,
            palette: { 
              primaryColor: '#FD8',
              textColor: 'black'
            }})}>
          <Button
            style={{marginTop: 10}} 
            title={'Button'}
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

AppRegistry.registerComponent('App', () => App)
```
## Demos
![image](https://user-images.githubusercontent.com/1309744/31782049-7b756dbc-b4bf-11e7-9835-a42bb747d7cf.png)
