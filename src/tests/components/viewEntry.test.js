import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import ViewEntryComponent from '../../components/ViewEntry';
import Root from '../../root';

let wrapper;

const props = {
  ViewEntry: jest.fn(),
  match: {
    params: {
      id: 1,
    },
  },
};

beforeEach(() => {
  wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
        <ViewEntryComponent
          ViewEntry={props.ViewEntry}
          match={props.match}
        />
      </MemoryRouter>
    </Root>,
  );
});

afterEach(() => wrapper.unmount());

describe('ViewEntry UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});
