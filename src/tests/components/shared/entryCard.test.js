import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import EntryComponent from '../../../components/shared/entryCard';
import Root from '../../../root';

const entries = [
  {
    id: 1,
    title: 'title',
    details: 'details',
    time_created: 'timecreated',
  },
];

const wrapper = mount(
  <Root>
    <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
      <EntryComponent
        entries={entries}
      />
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
