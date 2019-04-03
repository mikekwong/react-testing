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

// simulate events for text
it('has a text area that users can type in', () => {
  // find the textarea element
  // simulate an event by specifying the html event name, provide a fake/mock event object to handleChange handler to simulate value
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  })
  // force a re-render as handleChange state changes are async
  wrapped.update()

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
})

it('when form is submitted, text area gets emptied', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  })
  wrapped.update()
  // to submit the form. simulate name of html event
  wrapped.find('form').simulate('submit')
  // update the form again after the simulation above happens with submit so state change can happen
  wrapped.update()
  // after submission, we expect the text area state value to equal empty string
  expect(wrapped.find('textarea').prop('value')).toEqual('')
})
