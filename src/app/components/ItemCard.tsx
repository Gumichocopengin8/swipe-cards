import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, CardActions, Collapse, Slide } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Girl } from 'components/interface/';

interface Props {
  girl: Girl;
  isLike: boolean;
  isNope: boolean;
  topCardKey: number;
  zIndex: number;
}

const ItemCard = ({ girl, isLike, isNope, topCardKey, zIndex }: Props): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const onExpandClick = () => setExpanded(!expanded);

  useEffect(() => {
    setTimeout(() => {
      setExpanded(false);
    }, 200);
  }, [isLike, isNope]);

  const actionAnime = useMemo(() => {
    if (topCardKey === girl.key) {
      if (isLike) return 'left';
      else if (isNope) return 'right';
    }
  }, [isLike, isNope]);

  return (
    <Slide
      style={{ zIndex: 10 - zIndex }}
      direction={actionAnime}
      in={topCardKey !== girl.key || !(isLike || isNope)}
      mountOnEnter
      unmountOnExit
    >
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
          <CardContent>
            <div style={{ whiteSpace: 'pre' }}>{girl.description}</div>
          </CardContent>
        </Collapse>
      </CardParent>
    </Slide>
  );
};

const CardParent = styled(Card)`
  &&& {
    position: absolute;
    bottom: 64px;
    width: 95vw;
    height: fit-content;
    max-height: 85vh;
    overflow-y: auto;
  }

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
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;

export default ItemCard;
