import React from 'react'
import { Route } from 'react-router-dom'
// absolute path modified from .env file
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

export default () => {
  return (
    <div>
      <Route path='/post' component={CommentBox} />
      <Route exact path='/' component={CommentList} />
    </div>
  )
}
