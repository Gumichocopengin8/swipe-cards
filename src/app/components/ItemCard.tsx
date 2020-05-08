import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, CardActions, Collapse } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Girl } from 'components/interface/';

interface Props {
  girl: Girl;
  isLike: boolean;
  isNope: boolean;
}

const ItemCard = ({ girl, isLike, isNope }: Props): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const onExpandClick = () => setExpanded(!expanded);

  const actionAnime = useMemo(() => {
    if (isLike) return 'swipe-like';
    else if (isNope) return 'swipe-nope';
  }, [isLike, isNope]);

  return (
    <>
      {!girl ? (
        <div>no</div>
      ) : (
        <CardParent className={actionAnime}>
          <CardImage image={girl.picture} title="picture" />
          <CardActions disableSpacing onClick={onExpandClick}>
            <div className="info-container">
              <div>{girl.name}</div>
              <div>{girl.age}</div>
            </div>
            <InfoOutlinedIcon />
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>This is a description.</CardContent>
          </Collapse>
        </CardParent>
      )}
    </>
  );
};

const CardParent = styled(Card)`
  .info-container {
    display: flex;
    justify-content: center;
    text-align: center;

    > div:first-child {
      margin-right: 0.5rem;
    }
  }
`;

const CardImage = styled(CardMedia)`
  width: 90vw;
  height: 80vh;
  object-fit: cover;
`;

export default ItemCard;
