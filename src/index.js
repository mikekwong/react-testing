import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
// absolute path modified from .env file
import App from 'components/App'

// Encapsulate The app with the Provider so that the connect function can give its components global access to the store
// The Root component is = to Provider where it wraps App because App component gets passed down to index.js as a props.children

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
)
