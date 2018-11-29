import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Header from './shared/Header';
import { getReminder, addReminder, deleteReminder } from '../actions/profileActions';
import { getAllEntries } from '../actions/entryActions';
import { signout } from '../actions/authActions';
import Home from '../assets/icons8-home-page-24.png';
import Ellipsis from '../assets/Ellipsis.gif';
import spinner from '../assets/Spinner-1s.gif';

class Profile extends Component {
  state = {
    existingReminder: [],
    articleCount: 0,
  }

  componentDidMount() {
    const { getReminder: getOldReminder, getAllEntries: getEntriesCount } = this.props;
    getOldReminder();
    getEntriesCount();
  }

  componentWillReceiveProps(nextProps) {
    const { response, entries, history } = nextProps;
    const deleteButton = document.getElementById('delete');
    const reminder = document.getElementById('reminder');

    if (entries.status === 200) {
      this.setState({
        articleCount: entries.data.length,
      });
    }

    if (response.existingReminder.status === 200) {
      this.setState({
        existingReminder: response.existingReminder,
      });

      switch (response.existingReminder.data.reminder) {
        case null:
          deleteButton.disabled = true;
          reminder.innerText = 'You currently have no reminder set up, Would you like one?';
          break;
        default:
          deleteButton.disabled = false;
          reminder.innerText = `Your current reminder setting is for ${response.existingReminder.data.reminder} daily`;
          break;
      }
    }

    if (response.newReminder.status === 201) {
      swal(
        'Reminder created',
        `You have successfully created a new reminder for ${response.newReminder.data}`,
        'success',
      );

      reminder.innerText = `Your current reminder setting is for ${response.newReminder.data} daily`;
      response.newReminder.status = 0;
      setTimeout(() => { history.push('/dashboard'); }, 2000);
    }

    if (response.deletedReminder.status === 200) {
      swal(
        'Reminder deleted',
        'You have successfully deleted your old new reminder',
        'success',
      );

      response.deletedReminder.status = 0;
      setTimeout(() => { history.push('/dashboard'); }, 2000);
    }
  }

  handleDelete = (event) => {
    // prevent default
    event.preventDefault();

    // gather and process inputs
    const { deleteReminder: deleteOldReminder } = this.props;
    const set = event.target;

    // make request
    set.innerHTML = '';
    set.style.background = `#FEEF6D url(${spinner}) no-repeat center`;

    deleteOldReminder();
  }

  handleSet = (event) => {
    // prevent default
    event.preventDefault();

    // gather and process inputs
    const { addReminder: addNewReminder, history } = this.props;
    const time = event.target.previousSibling.value;
    const set = event.target;

    // make request
    set.innerHTML = '';
    set.style.background = `#FEEF6D url(${spinner}) no-repeat center`;
    const body = {
      time,
    };

    if (body.time.length === 5) {
      addNewReminder(body);
    } else {
      swal(
        'Please enter a valid time for your reminder',
        'Your reminder couldn\'t be set successfully',
        'error',
      );

      setTimeout(() => { history.push('/dashboard'); }, 2000);
    }
  }

  signout = () => {
    const { signout: signoutUser } = this.props;

    signoutUser();

    swal(
      'You have been signed out',
      'You have successfully signed out of your application',
      'success',
    );
  };

  render() {
    const { existingReminder, articleCount } = this.state;
    return (
      <div className="dashboard">
        <Header />
        <section>
          <h3>My Profile</h3>
        </section>
        {existingReminder.length === 0
          ? (
            <div id="loadingModal">
              <div className="loadingModal-main">
                <img src={Ellipsis} alt="Loading" />
              </div>
            </div>
          )
          : (
            null
          )
        }
        <section className="profile">
          <Link to="/dashboard">
            <img src={Home} alt="Home" />
          </Link>
          <p id="error" />
          <div>
            <h4>Reminder Setting</h4>
            <p>What time would you like to be reminded daily?</p>
            <input label="" type="time" name="time" id="time" required />
            <button onClick={this.handleSet} id="set" type="button">Set Reminder</button>
            <button onClick={this.handleDelete} id="delete" type="button">Delete Reminder</button>
            <p id="reminder" />
          </div>
          <div>
            <h4>Total Number of Entries</h4>
            <p id="entries">{`You have a total of ${articleCount} entries`}</p>
          </div>
          <button onClick={this.signout} type="button" id="signOut">Sign Out</button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    response: state.profile,
    entries: state.entries.entries,
  };
};

export default connect(mapStateToProps, {
  getReminder,
  addReminder,
  deleteReminder,
  getAllEntries,
  signout,
})(Profile);
