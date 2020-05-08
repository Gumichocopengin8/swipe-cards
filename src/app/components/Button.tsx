import React from 'react';

const Button = (): JSX.Element => {
  const { label, color, onclick, animeEnd } = this.props;

  const styles = {
    color: color,
  };

  return (
    <div className="Button">
      <div
        className="button"
        onMouseDown={onclick}
        onMouseUp={animeEnd}
        onTouchStart={onclick}
        onTouchEnd={animeEnd}
        style={styles}
      >
        {label}
      </div>
    </div>
  );
};

export default Button;
