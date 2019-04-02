import React from 'react'
// import Full Rendering
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapped

// before each test - 1
beforeEach(() => {
  wrapped = mount(<CommentBox />)
})
// after each test - 3
afterEach(() => {
  wrapped.unmount()
})

// 2
it('has a text area and a button', () => {
  // again find returns an array of found argument
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})
