import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

it('shows a comment box', () => {
  // Trick React with JSDOM
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  // Insert code to look inside the div and check to see if CommentBox is in there
  expect(div.innerHTML).toContain('Box for comment')

  // This is cleanup after test runs, looks inside the div to find the App component to remove. To help clear/destroy/unmount objects to free memory
  ReactDOM.unmountComponentAtNode(div)
})
