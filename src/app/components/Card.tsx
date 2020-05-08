import React from 'react';

const Card = (): JSX.Element => {
  const { picture, name, age, zindex, classname } = this.props;

  const styles = {
    zIndex: zindex,
  };

  const classNames = 'Card'.concat(' ', classname);

  return (
    <div className={classNames} style={styles}>
      <div className="contents">
        <img className="pic" src={picture} alt="girl" />
        <div className="info-container info">
          <div className="name">{name}</div>
          <div className="age">{age}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
