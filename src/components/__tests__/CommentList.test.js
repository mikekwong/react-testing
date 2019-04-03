import React from 'react'
// full dom rendering
import { mount } from 'enzyme'

import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapped

// initialize component by wrapping it with Provider
beforeEach(() => {
  // pass in intial fake state into component below. As original state is empty object
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  }
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

// it should log 2 since the comments have 2 from above
it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

// render is a Cheerio Wrapper around the rendered HTML's subtree (innerTextElement)
// no arguments in text will reveal actual text rendered inside each HTML tag
it('shows the text for each comment', () => {
  // console.log(wrapped.render().text())
  expect(wrapped.render().text()).toContain('Comment 1')
  expect(wrapped.render().text()).toContain('Comment 2')
})
