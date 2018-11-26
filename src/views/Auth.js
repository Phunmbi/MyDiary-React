import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAction } from '../actions/testAction';

export class Auth extends Component {
  handleClick = () => {
    const { testAction } = this.props;
    testAction();
  }

  componentDidUpdate = () => {
    const { response } = this.props;
    console.log(response)

    const result = document.getElementById('result');
    result.innerText = response.middleName;
  }

  render() {
    return (
      <div className="hero">
        <h2>Sign up</h2>
        <p onClick={this.handleClick} className="click">Click me</p>
        <div id="result"></div>
      </div>
    );
  }
};

function mapStatetoProps(state) {
  return { response: state.testReducer.test };
}

export default connect(mapStatetoProps, { testAction })(Auth);
