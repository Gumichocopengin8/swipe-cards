import React, { Component } from 'react'
import Card from './Card'
import Button from './Button'
import './css/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLike: false,
      isNope: false,
      girls: [],
      card1: [],
      card2: [],
    }

    this.girls = [
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
    ]

    this.card1 = this.girls.shift()
    this.card2 = this.girls.shift()
    this.animationEnd = this.animationEnd.bind(this)
  }

  clickLike = () => {
    this.setState({ isLike: true })
  }

  clickNope = () => {
    this.setState({ isNope: true })
  }

  animationEnd = () => {
    setTimeout(
      function() {
        this.setState({ isLike: false })
        this.setState({ isNope: false })
      }.bind(this),
      200
    )
    this.card1 = this.card2
    this.card2 = this.girls.shift()
    this.girls.push(this.card1)
  }

  render() {
    console.log(this.state.isLike)
    console.log(this.state.isNope)

    return (
      <div className='App'>
        <div className='container'>
          <div className='card-stack'>
            <Card
              picture={this.card1.picture}
              name={this.card1.name}
              age={this.card1.age}
              zindex='10'
              classname={this.state.isLike ? 'swipe-like' : this.state.isNope ? 'swipe-nope' : ''}
            />
            <Card picture={this.card2.picture} name={this.card2.name} age={this.card2.age} zindex='5' />
          </div>
          <div className='button-container'>
            <Button label='×' color='red' onclick={this.clickNope} animeEnd={this.animationEnd} />
            <Button label='♥' color='skyblue' onclick={this.clickLike} animeEnd={this.animationEnd} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
