import React, { Component } from 'react'

export default class CommentBox extends Component {
  state = { comment: '' }

  handleChange = e => {
    this.setState({ comment: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    // TODO: call an action creator and save comment
    this.setState({ comment: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          onChange={this.handleChange}
          value={this.state.comment}
          cols='30'
          rows='10'
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}
