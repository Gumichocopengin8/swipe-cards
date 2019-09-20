import React, { Component } from 'react'
import './css/Button.css'

class Button extends Component {
  render() {
    const { label, color, onclick, animeEnd } = this.props

    let styles = {
      color: color,
    }

    return (
      <div className='Button'>
        <div
          className='button'
          onMouseDown={onclick}
          onMouseUp={animeEnd}
          onTouchStart={onclick}
          onTouchEnd={animeEnd}
          style={styles}
        >
          {label}
        </div>
      </div>
    )
  }
}

export default Button
