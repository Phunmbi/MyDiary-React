import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import ProfileComponent, { Profile } from '../../components/Profile';
import Root from '../../root';

let wrapper;
let wrapped;

const props = {
  getReminder: jest.fn(),
  getAllEntries: jest.fn(),
};

beforeEach(() => {
  wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
        <ProfileComponent
          getReminder={props.getReminder}
          getAllEntries={props.getAllEntries}
        />
      </MemoryRouter>
    </Root>,
  );

  wrapped = shallow(
    <Profile
      getReminder={props.getReminder}
      getAllEntries={props.getAllEntries}
    />,
  );
});

afterEach(() => wrapper.unmount());

describe('Profile UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Profile Functionality', () => {
  it('should simulate setting a reminder', () => {
    const setButton = wrapped.find('#set');

    const inst = wrapped.instance();

    const mockedEvent = {
      preventDefault: jest.fn(),
      target: {
        style: {
          background: 'background',
        },
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
        previousSibling: {
          value: 'value',
        },
      },
    };

    inst.props = {
      addReminder: jest.fn(),
    };

    document.getElementById = jest.fn((selector) => {
      console.log('selector => ', selector);
      return {
        disabled: true,
      };
    });

    setButton.simulate('click', mockedEvent);

    wrapped.setProps({
      response: {
        newReminder: {
          status: 200,
        },
        deletedReminder: {
          status: 201,
        },
        existingReminder: {
          status: 200,
          data: {
            length: 3,
            reminder: null,
          },
        },
      },
      entries: {
        status: 200,
        data: {
          length: 4,
        },
      },
    });
  });

  it('should simulate setting a reminder', () => {
    const setButton = wrapped.find('#set');

    const inst = wrapped.instance();

    const mockedEvent = {
      preventDefault: jest.fn(),
      target: {
        style: {
          background: 'background',
        },
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
        previousSibling: {
          value: 'value',
        },
      },
    };

    inst.props = {
      addReminder: jest.fn(),
    };

    document.getElementById = jest.fn((selector) => {
      console.log('selector => ', selector);
      return {
        disabled: true,
      };
    });

    setButton.simulate('click', mockedEvent);

    wrapped.setProps({
      response: {
        newReminder: {
          status: 201,
        },
        deletedReminder: {
          status: 200,
        },
        existingReminder: {
          status: 200,
          data: {
            length: 3,
            reminder: true,
          },
        },
      },
      entries: {
        status: 200,
        data: {
          length: 4,
        },
      },
    });
  });

  it('should simulate setting a reminder', () => {
    const setButton = wrapped.find('#delete');

    const inst = wrapped.instance();

    const mockedEvent = {
      preventDefault: jest.fn(),
      target: {
        style: {
          background: 'background',
        },
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
        previousSibling: {
          value: 'value',
        },
      },
    };

    inst.props = {
      deleteReminder: jest.fn(),
    };

    setButton.simulate('click', mockedEvent);
  });

  it('should simulate setting a reminder', () => {
    const setButton = wrapped.find('#signOut');

    const inst = wrapped.instance();

    const mockedEvent = {
      preventDefault: jest.fn(),
      target: {
        style: {
          background: 'background',
        },
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
        previousSibling: {
          value: 'value',
        },
      },
    };

    inst.props = {
      signout: jest.fn(),
    };

    setButton.simulate('click', mockedEvent);
  });
});
