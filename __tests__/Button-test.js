/* eslint-disable no-undef */

import React from 'react'
import {
  Button,
  ThemeProvider,
  createTheme,
  DarkTheme

} from '../src'
import renderer from 'react-test-renderer'
test('Button renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider theme={createTheme(DarkTheme)}>
      <Button
        onPress={() => {
          console.log('onPress')
        }}
        title={'Test Button'} />
    </ThemeProvider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
