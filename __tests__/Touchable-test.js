/* eslint-disable no-undef */

import React from 'react'
import {
  Touchable
} from '../src'
import {
  Text,
  View
} from 'react-native'
import renderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

test('Touchable(Highlight) renders correctly', () => {
  const node = renderer.create(
    <Touchable
      backgroundColor={'red'}
      onPress={() => {
        expect(false).toEqual(true)
      }}
      disabled
      activeColor={'blue'}
      activeType={Touchable.PressMode.highlight}>
      <Text>Highlight Touchable</Text>
    </Touchable>
  )
  ReactTestUtils.Simulate.click(node)

  const tree = node.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Touchable(Opacity) renders correctly', () => {
  const tree = renderer.create(
    <Touchable
      backgroundColor={'red'}
      onPress={() => {}}
      disabled
      activeType={Touchable.PressMode.opacity}>
      <Text>Opacity Touchable</Text>
    </Touchable>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Touchable(Mask) renders correctly', () => {
  const tree = renderer.create(
    <View style={{flex: 1}}>
      <Touchable
        backgroundColor={'red'}
        onPress={() => {}}
        disabled
        activeType={Touchable.PressMode.mask} title={'Test Button'}>
        <Text>Mask Touchable</Text>
      </Touchable>
    </View>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Touchable(None) renders correctly', () => {
  const tree = renderer.create(
    <View style={{flex: 1}}>
      <Touchable
        backgroundColor={'red'}
        onPress={() => {}}
        disabled
        activeType={Touchable.PressMode.none} title={'Test Button'}>
        <Text>None Touchable</Text>
      </Touchable>
    </View>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
