import React, { Component } from 'react';
import './css/Card.css';

class Card extends Component {
  render() {
    const {
      picture,
      name,
      age,
      zindex,
      classname
    } = this.props;

    let styles = {
      zIndex: zindex,
    };

    let classNames = 'Card'.concat(' ', classname);

    return (
      <div className={classNames} style={styles}>
        <div className="contents">
          <img className="pic" src={picture} alt="girl"/>
          <div className="info-container info">
            <div className="name">{name}</div>
            <div className="age">{age}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;