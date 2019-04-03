import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'

// create the store with access to the reducers and initial state for store
const store = createStore(reducers, {})

// Encapsulate The app with the Provider so that the connect function can give its components global access to the store
export default props => {
  return <Provider store={store}>{props.children}</Provider>
}
