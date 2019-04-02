import React from 'react'
import Enzyme, { shallow } from 'enzyme'
// absolute path modified from .env file
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

// this code also located in setupTests.js
// Added here so Jest auto-test runs without error
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

it('shows a comment box', () => {
  // shallow renders just app component and no children inside of it
  const wrapped = shallow(<App />)

  // this returns array of CommentBox components
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
  const wrapped = shallow(<App />)
  expect(wrapped.find(CommentList).length).toEqual(1)
})
