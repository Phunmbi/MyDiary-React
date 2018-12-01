import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './shared/Header';
import Card from './shared/entryCard';
import { getAllEntries } from '../actions/entryActions';
import Ellipsis from '../assets/Ellipsis.gif';

export class Dashboard extends Component {
  state = {
    entries: [],
  }

  componentDidMount = () => {
    const { getAllEntries: getEntries } = this.props;
    getEntries();
  }

  componentWillReceiveProps = (nextProps) => {
    const { response } = nextProps;
    const allEntries = response.entries.entries;

    if (allEntries.status === 200 && allEntries.data.length > 0) {
      this.setState({ entries: allEntries.data });
    }

    if (allEntries.status === 200 && allEntries.data.length === 0) {
      this.setState({ entries: 'no entries' });
    }
  };

  render() {
    const { entries } = this.state;
    return (
      <div className="dashboard">
        <Header />
        {localStorage.getItem('firstName')
          ? (
            <h1>Welcome to your Diary {localStorage.getItem('firstName').charAt(0).toUpperCase() + localStorage.getItem('firstName').slice(1, localStorage.getItem('firstName').length)}</h1>
          )
          : (
            null
          )
        }
        <section>
          <h3>Dashboard</h3>
        </section>
        {entries.length > 0
          ? (
            <section id="section">
              {entries === 'no entries'
                ? (
                  <div>
                    <p>Welcome to my Diary. Here's a little guide to help you know your way around.</p>
                    <p>To add a new entry, just click on the big blue + button in the bottom corner.</p>
                    <p>And if you'd like us to help remind you to pen something down, click on the icon in the upper right corner. Enjoy.</p>
                  </div>
                )
                : (
                  <Card entries={entries} />
                )
              }
            </section>
          )
          : (
            <div id="loadingModal">
              <div className="loadingModal-main">
                <img src={Ellipsis} alt="Loading" />
              </div>
            </div>
          )
        }
        <div className="add">
          <Link to="/entries/add"><span>+</span></Link>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return { response: state };
};

export default connect(mapStatetoProps, { getAllEntries })(Dashboard);
