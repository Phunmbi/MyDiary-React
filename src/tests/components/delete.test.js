import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import DeleteComponent, { Delete } from '../../components/Delete';
import Root from '../../root';

let wrapper;
let wrapped;

beforeEach(() => {
  jest.useFakeTimers();
  wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
        <DeleteComponent />
      </MemoryRouter>
    </Root>,
  );

  wrapped = shallow(
    <Delete />,
  );
});

afterEach(() => wrapper.unmount());

describe('Delete UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Delete Functionality', () => {
  it('should click yes', () => {
    const inst = wrapped.instance();

    jest.runAllTimers();

    const deleteEntry = jest.fn();
    inst.props = {
      match: {
        params: 1,
      },
      deleteEntry,
    };

    const yesButton = wrapped.find('#yes-button');
    yesButton.simulate('click');
  });

  it('should click No', () => {
    const inst = wrapped.instance();

    inst.setState({});

    const deleteEntry = jest.fn();
    inst.props = {
      history: {
        goBack: jest.fn(),
      },
      deleteEntry,
    };

    const yesButton = wrapped.find('#no-button');
    yesButton.simulate('click');
  });
});
