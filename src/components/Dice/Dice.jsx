import React, { Component } from 'react'
import diceEmpty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

const images = [dice1, dice2, dice3, dice4, dice5, dice6]

const getRandom = () => Math.floor(Math.random() * images.length)

class Dice extends Component {
  state = {
    value: getRandom()
  }

  handleDiceClick = () => {
    this.setState({ value: null }, () => {
      setTimeout(() => {
        this.setState({ value: getRandom() })
      }, 1000);
    })
  }

  render() {
    const { value } = this.state
    return (
      <img
        onClick={this.handleDiceClick}
        src={value || value === 0 ? images[value] : diceEmpty}
        width={200}
        alt="dice"
      />
    )
  }
}

export default Dice