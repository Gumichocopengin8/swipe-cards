import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, CardActions, Collapse, Slide } from '@material-ui/core';
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
    if (isLike) return 'left';
    else if (isNope) return 'right';
  }, [isLike, isNope]);

  return (
    <>
      {!girl ? (
        <CardParent className={actionAnime}>no</CardParent>
      ) : (
        <Slide direction={actionAnime} in={!isLike && !isNope} mountOnEnter unmountOnExit>
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
        </Slide>
      )}
    </>
  );
};

const CardParent = styled(Card)`
  &&& {
    width: 95vw;
    height: 90vh;
    overflow: auto;
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
  height: 90%;
  object-fit: cover;
`;

export default ItemCard;
