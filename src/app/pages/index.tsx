import React, { useState } from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';
import ItemCard from 'components/ItemCard';
import { Girl } from 'components/interface/';

const Index = (): JSX.Element => {
  const girlsData: Girl[] = [
    {
      key: 0,
      picture: 'https://image.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg',
      name: 'Sarah',
      age: '18',
    },
    {
      key: 1,
      picture:
        'https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg',
      name: 'Matilda',
      age: '19',
    },
    {
      key: 2,
      picture:
        'https://steemitimages.com/DQmTeyuLCuyPz6Y1rU6YVKEMMkeQeJzUfRaaNxpZdUeY7Hh/Blue%20Eyes%20Hot%20Girls.jpg',
      name: 'Victoria',
      age: '23',
    },
    {
      key: 3,
      picture: 'https://i.pinimg.com/originals/fc/46/32/fc463238d18c33865178947181c21fb1.jpg',
      name: 'Andie',
      age: '20',
    },
    {
      key: 4,
      picture: 'https://i.redd.it/whzvlgcyydaz.jpg',
      name: 'Valerie',
      age: '19',
    },
    {
      key: 5,
      picture:
        'http://3.bp.blogspot.com/-75xAd3IEA34/U7S3580MDbI/AAAAAAAABlo/E4ESkscWI74/s1600/641x750xcute-australia-fans-girls-on-world-cup-2014_1400467729.jpg.pagespeed.ic.idUr3HxG63%5B1%5D.jpg',
      name: 'Eliza',
      age: '25',
    },
    {
      key: 6,
      picture: 'https://www.pauznet.com/file-429-38-picdumps-natural-beauty.jpg',
      name: 'Gina',
      age: '21',
    },
    {
      key: 7,
      picture: 'https://i.redd.it/brd0vnsihgg11.jpg',
      name: 'Ellena',
      age: '18',
    },
    {
      key: 7,
      picture: 'https://i.pinimg.com/originals/63/23/90/6323904dc842159af7321b8e12e9a41d.jpg',
      name: 'Sophie',
      age: '21',
    },
    {
      key: 8,
      picture: 'https://farm3.static.flickr.com/2513/3744383871_26f0a3f960_o.jpg',
      name: 'Julia',
      age: '22',
    },
  ];

  const [like, setLike] = useState<boolean>(false);
  const [nope, setNope] = useState<boolean>(false);
  const [girls, setGirls] = useState<Girl[]>(girlsData);

  const onLike = () => setLike(true);
  const onNope = () => setNope(true);
  const animationEnd = () => {
    setTimeout(() => {
      setLike(false);
      setNope(false);
    }, 300);
    girls.shift();
    setGirls(girls);
  };

  return (
    <Container>
      <div style={{ marginBottom: '50px;' }}>
        <ItemCard girl={girls[0]} isLike={like} isNope={nope} />
      </div>
      <Buttons>
        <IconButton onMouseDown={onNope} onMouseUp={animationEnd} onTouchStart={onNope} onTouchEnd={animationEnd}>
          <ClearIcon />
        </IconButton>
        <IconButton onMouseDown={onLike} onMouseUp={animationEnd} onTouchStart={onLike} onTouchEnd={animationEnd}>
          <FavoriteIcon />
        </IconButton>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  display: flex;
  justify-content: space-around;
`;

export default Index;
