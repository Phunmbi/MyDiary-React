import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import EditComponent, { Edit } from '../../components/Edit';
import Root from '../../root';

let wrapper;
let wrapped;

document.getElementById = jest.fn((selector) => {
  console.log('selector => ', selector);

  return {
    value: {
      data: {
        title: 'value',
      },
    },
    style: {
      background: 'background',
    },
    innerHTML: 'inner',
    disabled: true,
  };
});

const props = {
  viewEntry: jest.fn(),
  editEntry: jest.fn(),
  response: {
    singleEntry: {
      status: 200,
      data: {
        title: 'title',
      },
    },
    editedEntry: {
      response: {
        status: 200,
      },
    },
  },
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
        <EditComponent
          match={props.match}
          response={props.response}
          viewEntry={props.viewEntry}
        />
      </MemoryRouter>
    </Root>,
  );

  wrapped = shallow(
    <Edit
      match={props.match}
      response={props.response}
      viewEntry={props.viewEntry}
    />,
  );
});

afterEach(() => wrapper.unmount());

describe('Edit UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Edit Functionality', () => {
  it('should click simulate edit', () => {
    const submitButton = wrapped.find('form');

    const inst = wrapped.instance();

    inst.props = {
      editEntry: jest.fn(),
      match: {
        params: {
          id: 1,
        },
      },
    };

    const mockedEvent = {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn(),
        children: {
          title: 'title',
          details: 'details',
          submit: {
            innerHTML: 'submit',
            style: {
              background: 'background',
            },
          },
        },
      },
    };
    submitButton.simulate('submit', mockedEvent);
  });

  it('should click simulate edit 2', () => {
    const inst = wrapped.instance();

    inst.props = {
      editEntry: jest.fn(),
      match: {
        params: {
          id: 1,
        },
      },
    };

    wrapped.setState({});
  });
});
