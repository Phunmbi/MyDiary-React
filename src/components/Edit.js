import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { viewEntry, editEntry } from '../actions/entryActions';
import Header from './shared/Header';
import Home from '../assets/icons8-home-page-24.png';
import Ellipsis from '../assets/Ellipsis.gif';
import spinner from '../assets/Spinner-1s.gif';

class Edit extends Component {
  componentDidMount() {
    const { viewEntry: viewSingleEntry, match } = this.props;
    const { id } = match.params;
    viewSingleEntry(id);
  }

  componentDidUpdate() {
    const { response, history } = this.props;
    const entry = response.singleEntry;
    const title = document.getElementById('title');
    const details = document.getElementById('details');
    const submit = document.getElementById('submit');

    // Reset styles
    submit.innerHTML = 'Submit';
    submit.style.background = '#FEEF6D';

    title.value = entry.data.title;
    details.value = entry.data.details;

    const { editedEntry } = response;

    if (editedEntry.status === 200) {
      swal(
        'Entry edited',
        'Entry successfully edited',
        'success',
      );

      setTimeout(() => { history.push('/dashboard'); }, 2000);
    }
  }

  handleSubmit = (event) => {
    // Prevent default
    event.preventDefault();

    // gather inputs
    const { title, details, submit } = event.target.children;
    const { editEntry: editOldEntry, match } = this.props;

    // set button to load
    submit.innerHTML = '';
    submit.style.background = `#FEEF6D url(${spinner}) no-repeat center`;

    // process inputs
    const body = {
      title: title.value,
      details: details.value,
    };

    // Make request
    editOldEntry(body, match.params.id);
  }

  render() {
    const { response } = this.props;
    const entry = response.singleEntry;
    return (
      <div className="dashboard">
        <Header />
        {entry.status === 200
          ? (
            <div>
              <section>
                <h3>Edit Entry</h3>
              </section>
              <section className="edit-entry">
                <form onSubmit={this.handleSubmit}>
                  <input id="title" type="text" />
                  <textarea id="details" name="details" cols="70" rows="16" />
                  <button id="submit" type="submit">Submit</button>
                  <Link to="/dashboard">
                    <img src={Home} alt="Home" />
                  </Link>
                </form>
              </section>
            </div>
          )
          : (
            <div id="loadingModal">
              <div className="loadingModal-main">
                <img src={Ellipsis} alt="Loading" />
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { response: state.entries };
};

export default connect(mapStateToProps, { viewEntry, editEntry })(Edit);
