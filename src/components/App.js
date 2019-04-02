import React from 'react'
// absolute path modified from .env file
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

export default () => {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  )
}
