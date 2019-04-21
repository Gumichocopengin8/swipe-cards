import React, { Component } from 'react';
import './css/Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick = (label) => {
    if(label === '×') {
      console.log('Nope');
    } else if(label === '♥') {
      console.log('Like');
    }
  }

  render() {
    const {
      label,
      color
    } = this.props;

    let styles = {
      color: color,
    };

    return (
      <div className="Button">
        <div className="button" onClick={() => this.buttonClick(label)} style={styles}>{label}</div>
      </div>
    );
  }
}

export default Button;
