import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { deleteEntry } from '../actions/entryActions';


class Delete extends Component {
  handleNo = () => {
    const { history } = this.props;
    history.goBack();
  }

  handleYes = () => {
    const { deleteEntry: deleteSingleEntry, match } = this.props;
    deleteSingleEntry(match.params.id);
  }

  componentDidUpdate() {
    const { history } = this.props;
    swal(
      'Entry Deleted',
      'This entry has been successfully deleted',
      'success',
    );
    setTimeout(() => { history.push('/dashboard'); }, 2000);
  }

  render() {
    return (
      <div className="dashboard">
        <div id="deleteModal">
          <div className="deleteModal-main">
            <div className="deleteModal-question">
              <p id="response" />
              <p>Are you sure you want to delete this entry?</p>
            </div>
            <div className="deleteModal-button">
              <button onClick={this.handleYes} type="button" id="yes-button" className="button">Yes</button>
              <button onClick={this.handleNo} type="button" id="no-button" className="button">No</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { response: state };
};

export default connect(mapStateToProps, { deleteEntry })(Delete);
