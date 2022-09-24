import React, { Component } from 'react'

const colors = ['purple','blue','green','yellow','orange','red']

class LikeButton extends Component {
  state = {
    likes: 0
  }

  addLike = () => {
    this.setState((prevState) => {
      return {
        likes: prevState.likes + 1
      }
    })
  }

  render() {
    const { likes } = this.state
    return (
      <button
        className="LikeButton" onClick={this.addLike}
        style={{ backgroundColor: colors[likes % colors.length] }}
      >
        {likes} {likes === 1 ? 'like' : 'likes'}
      </button>
    )
  }
}

export default LikeButton