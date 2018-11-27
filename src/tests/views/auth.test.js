import React from 'react';
import Auth from '../../views/Auth';
import Root from '../../root';

const wrapper = shallow(
  <Root>
    <Auth debug />
  </Root>
)

describe('Auth UI', () => {
  it('should render correctly in "debug" mode', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
