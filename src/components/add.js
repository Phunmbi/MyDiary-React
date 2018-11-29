import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/shared/Header';
import Home from '../assets/icons8-home-page-24.png';

class Add extends Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
        <section>
          <h3>Add a new Entry</h3>
        </section>
        <p id="errorResponse" />
        <section className="add-entry">
            <form>
                <input id="title" type="text" placeholder="Title" />
                <textarea id="details" name="details" id="details" cols="70" rows="16" placeholder="Tell me what happened today" />
                <input id="submit" type="submit" value="Submit" />
                <Link to="/dashboard">
                  <img src={Home} alt="Home" />
                </Link>
            </form>
        </section>
      </div>
    )
  }
}

export default Add;
