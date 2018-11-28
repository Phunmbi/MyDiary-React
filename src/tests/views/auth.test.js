import React from 'react';
import Signup from '../../components/auth/Signup';
import Root from '../../root';

const wrapper = shallow(
  <Root>
    <Signup />
  </Root>
)

describe('Signup UI', () => {
  it('should render correctly in "debug" mode', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
