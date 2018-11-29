import React, { Component } from 'react';
import Header from './shared/Header';
import Home from '../assets/icons8-home-page-24.png';
// import Ellipsis from '../assets/Ellipsis.gif';

class Profile extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="dashboard">
        <Header />
        <section>
          <h3>My Profile</h3>
        </section>
        {/* <div id="loadingModal">
          <div className="loadingModal-main">
            <img src={Ellipsis} alt="Loading" />
          </div>
        </div> */}
        <section className="profile">
          <a href="dashboard.html"><img src={Home} alt="Home" /></a>
          <p id="error" />
          <div>
            <h4>Reminder Setting</h4>
            <form>
              What time would you like to be reminded daily?
              <input type="time" name="time" id="time" />
              <input id="set" type="submit" value="Set Reminder" />
              <input id="delete" type="submit" value="Delete Reminder" />
            </form>
            <p id="reminder" />
          </div>
          <div>
            <h4>Total Number of Entries</h4>
            <p id="entries" />
          </div>
          <button type="button" id="signOut">Sign Out</button>
        </section>
      </div>
    );
  }
}

export default Profile;
