import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import DashboardComponent, { Dashboard } from '../../components/dashboard';
import Root from '../../root';

let wrapper;
let wrapped;
let wrappedMore;

const props = {
  getAllEntries: jest.fn(),
  response: {
    entries: {
      entries: {
        status: 200,
        data: {
          length: 0,
          message: 'old',
        },
      },
    },
  },
};

const propsMore = {
  getAllEntries: jest.fn(),
  response: {
    entries: {
      entries: {
        status: 200,
        data: {
          length: 5,
          message: 'old',
        },
      },
    },
  },
};

document.getElementById = jest.fn((selector) => {
  console.log('selector => ', selector);

  return {
    style: {
      background: 'background',
    },
    innerHTML: 'inner',
    disabled: true,
  };
});

beforeEach(() => {
  jest.useFakeTimers();
  wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
        <DashboardComponent
          getAllEntries={props.getAllEntries}
          response={props.response}
        />
      </MemoryRouter>
    </Root>,
  );

  wrapped = shallow(
    <Dashboard
      getAllEntries={props.getAllEntries}
      response={props.response}
    />,
  );

  wrappedMore = shallow(
    <Dashboard
      getAllEntries={props.getAllEntries}
      response={propsMore.response}
    />,
  );
});

afterEach(() => wrapper.unmount());

describe('Dashboard UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Dashboard Functionality', () => {
  it('should click simulate submit', () => {
    const inst = wrapped.instance();
    inst.props = {
      addEntry: jest.fn(),
      match: {
        params: {
          id: 1,
        },
      },
    };

    inst.forceUpdate();
  });

  it('should click simulate submit', () => {
    const inst = wrappedMore.instance();
    inst.props = {
      addEntry: jest.fn(),
      match: {
        params: {
          id: 1,
        },
      },
    };

    inst.forceUpdate();
  });
});
