import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import AddComponent, { Add } from '../../components/add';
import Root from '../../root';

let wrapper;
let wrapped;
let wrappedLess;

const response = {
  addEntry: jest.fn(),
  entries: {
    newEntryError: {
      data: {
        message: 'new',
      },
      length: 5,
    },
  },
};

const responseLess = {
  addEntry: jest.fn(),
  entries: {
    newEntryError: {
      data: {
        message: 'new',
      },
      length: 0,
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
        <AddComponent
          response={response}
        />
      </MemoryRouter>
    </Root>,
  );

  wrapped = shallow(
    <Add
      response={response}
    />,
  );

  wrappedLess = shallow(
    <Add
      response={responseLess}
    />,
  );
});

afterEach(() => wrapper.unmount());

describe('Add UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Add Functionality', () => {
  it('should click simulate submit', () => {
    const submitButton = wrapped.find('form');
    jest.runAllTimers();
    const inst = wrapped.instance();

    inst.props = {
      addEntry: jest.fn(),
      match: {
        params: {
          id: 1,
        },
      },
      response: {
        entries: {
          newEntryError: {
            length: 4,
          },
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

    inst.forceUpdate();

    inst.props = {
      addEntry: jest.fn(),
      match: {
        params: {
          id: 1,
        },
      },
      response: {
        entries: {
          newEntryError: {
            length: 0,
          },
        },
      },
    };
  });

  it('should click simulate submit', () => {
    const submitButton = wrappedLess.find('form');
    jest.runAllTimers();
    const inst = wrappedLess.instance();

    inst.props = {
      addEntry: jest.fn(),
      match: {
        params: {
          id: 1,
        },
      },
      response: {
        entries: {
          newEntryError: {
            length: 4,
          },
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

    inst.forceUpdate();

    inst.props = {
      addEntry: jest.fn(),
      match: {
        params: {
          id: 1,
        },
      },
      response: {
        entries: {
          newEntryError: {
            length: 0,
          },
        },
      },
    };
  });
});
