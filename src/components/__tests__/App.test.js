import React from 'react'
import { shallow } from 'enzyme'
// absolute path modified from .env file
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

// initialize wrapped so it is accessible in each of the tests since they share common setup with App
let wrapped

beforeEach(() => {
  // shallow renders just app component and no children inside of it
  wrapped = shallow(<App />)
})

it('shows a comment box', () => {
  // this returns array of CommentBox components
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
