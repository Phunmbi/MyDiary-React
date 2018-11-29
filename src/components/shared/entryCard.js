import React, { Component } from 'react';
import Edit from '../../assets/icons8-pencil-26.png';
import Delete from '../../assets/icons8-trash-26.png';

class Card extends Component {
  displayCard = () => {
    const{ entries } = this.props;
    return entries.map((entry) => {
      return <div key={entry.id} className="card">
          <div className="card-title">
            <p>{entry.title.slice(0, 24)}...</p>
            <p>{entry.time_created.slice(0, 10)}</p>
          </div>
          <div className="card-details">
            <p>{entry.details.slice(0, 200)}...</p>
          </div>
          <div className="card-actions">
            <img className="clickIcons" src={Edit} alt="Edit" />
            <img className="clickIcons" src={Delete} alt="Delete" />
          </div>
        </div>;
    })
  }

  render() {
    return (
      <div className="card-wrapper">
        {this.displayCard()}
      </div>
    );
  }
}

export default Card;