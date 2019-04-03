import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from 'reducers'

// create the store with access to the reducers and initial state for store
// const store = createStore(reducers, {})

// Encapsulate The app with the Provider so that the connect function can give its components global access to the store
// These props are destructured so that actual initialState is an empty object for actual use (to exclude the test)
export default ({ children, initialState = {} }) => {
  // set props.initialState so that the test can pass in an initial state of values to the store
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  )
  return <Provider store={store}>{children}</Provider>
}
