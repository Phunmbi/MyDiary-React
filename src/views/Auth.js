import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAction } from '../actions/testAction';

class Auth extends Component {
  handleClick() {
    console.log(props);
  }

  render() {
    return (
      <div className="hero">
        <h2>Sign up</h2>
        <p onClick={this.handleClick} className="click">Click me</p>
        <div></div>
      </div>
    );
  }
};

const MapPropsToState = (state) => {
  response: state
}

export default connect(MapPropsToState, { testAction })(Auth);
