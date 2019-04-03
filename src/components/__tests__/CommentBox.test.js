import React from 'react'
// import Full Rendering
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import Root from 'Root'

let wrapped

// before each test - 1
beforeEach(() => {
  // We wrap Root around CommentBox to simulate Provider tag to simulate Redux store access
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  )
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

describe('the text area', () => {
  // 1st
  beforeEach(() => {
    // find the textarea element
    // simulate an event by specifying the html event name, provide a fake/mock event object to handleChange handler to simulate value
    // these were extracted from the bottom 2 tests rather than repeating it twice.
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    })
    // force a re-render as handleChange state changes are async
    wrapped.update()
  })
  // 2nd
  // simulate events for text
  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })
  // 3rd
  it('when form is submitted, text area gets emptied', () => {
    // to submit the form. simulate name of html event
    wrapped.find('form').simulate('submit')
    // update the form again after the simulation above happens with submit so state change can happen
    wrapped.update()
    // after submission, we expect the text area state value to equal empty string
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
