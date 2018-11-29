import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { viewEntry } from '../actions/entryActions';
import Header from './shared/Header';
import Home from '../assets/icons8-home-page-24.png';
import Edit from '../assets/icons8-pencil-26.png';
import Delete from '../assets/icons8-trash-26.png';
import Ellipsis from '../assets/Ellipsis.gif';

class ViewEntry extends Component {
  componentDidMount() {
    const { viewEntry: viewSingleEntry, match } = this.props;
    const { id } = match.params;
    viewSingleEntry(id);
  }

  render() {
    const response = this.props;
    const entry = response.response.singleEntry;
    return (
      <div className="dashboard">
        <Header />
        {entry.status === 200
          ? (
            <div>
              <section className="entry-title">
                <h3 id="title">{entry.data.title}</h3>
                <h3 id="date">{entry.data.time_created.slice(0, 10)}</h3>
              </section>
              <section className="entry-body">
                <p id="details">{entry.data.details}</p>
              </section>
              <section className="entry-actions">
                <div>
                  <Link to="/dashboard">
                    <img src={Home} alt="Home" />
                  </Link>
                  <Link to={`/entries/edit/${entry.data.id}`}>
                    <img src={Edit} alt="Edit" title="Edit Entry" />
                  </Link>
                  <Link to="/entries/delete">
                    <img src={Delete} alt="Delete" title="Delete Entry" />
                  </Link>
                </div>
              </section>
            </div>
          )
          : (
            <div id="loadingModal">
              <div className="loadingModal-main">
                <img src={Ellipsis} alt="Loading" />
              </div>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { response: state.entries };
};

export default connect(mapStateToProps, { viewEntry })(ViewEntry);
