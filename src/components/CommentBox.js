import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'
// imoprt HOC to use with chosen component
import requireAuth from 'components/requireAuth'

class CommentBox extends Component {
  state = { comment: '' }

  // // Our component just got rendered
  // componentDidMount () {
  //   this.shouldNavigateAway()
  // }
  // // Our component just got updated
  // componentDidUpdate () {
  //   this.shouldNavigateAway()
  // }

  // shouldNavigateAway () {
  //   // once signed out state changes, redirect to root
  //   if (!this.props.auth) {
  //     this.props.history.push('/')
  //   }
  // }

  handleChange = e => {
    this.setState({ comment: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea
            onChange={this.handleChange}
            value={this.state.comment}
            cols="30"
            rows="10"
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        {/* button added outside of form to it doesn't get caught up in submission of actual form */}
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   const { auth } = state
//   return { auth }
// }

// for connect with use of HOC, pass down the HOC with the component as an argument VS just the component itself
export default connect(
  null,
  actions
)(requireAuth(CommentBox))
