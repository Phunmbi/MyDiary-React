import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/shared/Header';
import { getAllEntries } from '../actions/entryActions';
import Ellipsis from '../assets/Ellipsis.gif';

class Dashboard extends Component {
  state = {
    entries: [],
    error: []
  }

  componentDidMount = () => {
    const { getAllEntries: getEntries  } = this.props;
    getEntries()
    console.log(this.props);
  }

  // componentDidUpdate = () => {
  //   console.log(this.props);
  // }

  render() {
    return (
      <div>
        <Header />
        <section>
          <h1 id="response"></h1>
        </section>
          <h1>Welcome to your Diary {localStorage.getItem('firstName').charAt(0).toUpperCase()}{localStorage.getItem('firstName').slice(1, localStorage.getItem('firstName').length)}</h1>
        <section>
          <h3>Dashboard</h3>
        </section>
        <section id="section">
        </section>
        <div id="loadingModal">
          <div className="loadingModal-main">
            <img src={Ellipsis} alt="Loading" />
          </div>
        </div>
        <div id="deleteModal">
          <div className="deleteModal-main">
            <div className="deleteModal-question">
              <p id="response"></p>
              <p>Are you sure you want to delete this entry?</p>
            </div>
            <div className="deleteModal-button">
              <button id="yes-button" className="button">Yes</button>
              <button id="no-button" className="button">No</button>
            </div>
          </div>
        </div>

        <div className="add">
            <a href="add.html"><span>+</span></a>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return { response: state };
}

export default connect(mapStatetoProps, { getAllEntries })(Dashboard);
