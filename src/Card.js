import React, { Component } from 'react';
import './css/Card.css';

class Card extends Component {
  render() {
    const {
      picture,
      name,
      age
    } = this.props;

    return (
      <div className="Card">
        <img className="pic" src={picture} alt="girl" />
        <div className="info-container info">
          <div className="name">{name}</div>
          <div className="age">{age}</div>
        </div>
      </div>
    );
  }
}

export default Card;