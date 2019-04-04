import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = e => {
    this.setState({ comment: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render () {
    return (
      <div>
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
        {/* button added outside of form to it doesn't get caught up in submission of actual form */}
        <button className='fetch-comments' onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    )
  }
}

export default connect(
  null,
  actions
)(CommentBox)
