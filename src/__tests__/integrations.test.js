import React from 'react'
import { mount } from 'enzyme'
// library for mock axios requests that doesn't actually make a real network request but mimics the data returned
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
  // intercept any axios requests, stop them.
  moxios.install()
  // respond to the api call with some data and trick axios into thinking it just got a response
  // 2nd argument respond with fake object key value pairs that get served back to axios
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    // fake a list of objects in the response
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  })
})

// after each test runs below, uninstall the mock axios request & response so as not to accidentally stub out real requests in our app with our fake req & res
afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of comments and display them', done => {
  // Attempt to render the *entire* App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  // Find the 'fetchComments' button via className and click it
  wrapped.find('.fetch-comments').simulate('click')
  // introduce a tiny little pause
  // Expect to find a list of comments!
  // (setTimeout with 1ms) moxios.wait to intercept with returned results before ending test
  moxios.wait(() => {
    // explicitly tell 'wrapped' application to update components inside of it to get latest of everything.
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(2)
    // invoke done as placed above in parameter to explicitly tell jest not to finish test until after the final test runs in moxios.wait (setTimeout). As default without done() it'll go line by line and finish test
    done()
    // clean from memory
    wrapped.unmount()
  })
})
