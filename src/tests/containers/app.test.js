import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import App from '../../containers/App';
import Root from '../../root';

const wrapper = mount(
  <Root>
    <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
      <App />
    </MemoryRouter>
  </Root>,
);

describe('Card UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});
