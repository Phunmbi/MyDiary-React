import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import SignupComponent, { Signup } from '../../../components/auth/Signup';
import Root from '../../../root';

let wrapper;
let wrapped;
let wrappedTrue;

const response = {
  auth: {
    error: false,
  },
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

const history = {
  push: jest.fn(),
};

const responseTrue = {
  auth: {
    status: 201,
    error: {
      data: {
        Error: true,
      },
    },
  },
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
        <SignupComponent
          response={response}
        />
      </MemoryRouter>
    </Root>,
  );

  wrapped = shallow(
    <Signup
      response={response}
    />,
  );


  wrappedTrue = shallow(
    <Signup
      response={responseTrue}
      history={history}
    />,
  );
});

afterEach(() => wrapper.unmount());

describe('Signup UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Signup Functionality', () => {
  it('should click simulate submit', () => {
    const submitButton = wrapped.find('form');
    const firstName = wrapped.find('#firstName');

    const mockedEvent = {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn(),
        children: {
          firstName: {
            value: 'value',
          },
          lastName: {
            value: 'value',
          },
          email: {
            value: 'value',
          },
          password: {
            value: 'value',
          },
          confirmPassword: {
            value: 'value',
          },
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
    firstName.simulate('change', mockedEvent);
  });

  it('should click simulate submit', () => {
    const submitButton = wrappedTrue.find('form');
    const firstName = wrappedTrue.find('#firstName');

    const mockedEvent = {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn(),
        children: {
          firstName: {
            value: 'value',
          },
          lastName: {
            value: 'value',
          },
          email: {
            value: 'value',
          },
          password: {
            value: 'value',
          },
          confirmPassword: {
            value: 'value',
          },
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
    firstName.simulate('change', mockedEvent);
  });
});
