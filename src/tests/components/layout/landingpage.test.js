import React from 'react';
import toJson from 'enzyme-to-json';
import LandingPage from '../../../components/layouts/LandingPage';

let wrapper;

beforeEach(() => {
  jest.useFakeTimers();
  wrapper = shallow(
    <LandingPage />,
  );
});

afterEach(() => wrapper.unmount());

describe('Authentication UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});
