import {View} from 'react-native';
import React from 'react';
import {Button} from '../src';
import renderer from 'react-test-renderer';
test('renders correctly', () => {
  const tree = renderer.create(
    <Button 
      onPress={() => {
        console.log('onPress')
      }}
      title={'Test Button'} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
