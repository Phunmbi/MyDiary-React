import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { addEntry } from '../actions/entryActions';
import Header from './shared/Header';
import Home from '../assets/icons8-home-page-24.png';
import spinner from '../assets/Spinner-1s.gif';

class Add extends Component {
  handleSubmit = (event) => {
    // Prevent default
    event.preventDefault();

    // Then gather and process inputs
    const { title, details, submit } = event.target.children;
    const { addEntry: addNewEntry } = this.props;

    // set button to load
    submit.innerHTML = '';
    submit.style.background = `#FEEF6D url(${spinner}) no-repeat center`;

    // Make request
    const body = {
      title: title.value,
      details: details.value,
    };
    addNewEntry(body);
  }

  componentWillReceiveProps(nextProps) {
    const submit = document.getElementById('submit');
    const { response, history } = nextProps;

    // Reset styles
    submit.innerHTML = 'Submit';
    submit.style.background = '#FEEF6D';

    if (response.entries.newEntryError.length > 0) {
      swal(
        'Error Creating Entry',
        response.entries.newEntryError.data.message,
        'error',
      );
    } else {
      swal(
        'New entry created',
        'Successfully created entry',
        'success',
      );

      history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="dashboard">
        <Header />
        <section>
          <h3>Add a new Entry</h3>
        </section>
        <p id="errorResponse" />
        <section className="add-entry">
          <form onSubmit={this.handleSubmit}>
            <input id="title" type="text" placeholder="Title" required />
            <textarea id="details" name="details" cols="70" rows="16" placeholder="Tell me what happened today" required />
            <button id="submit" type="submit">Submit</button>
            <Link to="/dashboard">
              <img src={Home} alt="Home" />
            </Link>
          </form>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ response: state });

export default connect(mapStateToProps, { addEntry })(Add);
