export default ({ dispatch }) => next => action => {
  // check to see if action has a promise on its payload property
  // If it does, then wait for it to resolve
  // If it doesn't, then send the action onto the next middleware
  // if it has a payload || if there is not a then function in the payload then...assume its a promise
  if (!action.payload || !action.payload.then) {
    // forward the action onto next function/middlweare in chain
    return next(action)
  }

  // We want to wait for the promise to resolve
  // (get its data!!) and then create a new action
  // with that data and dispatch it
  action.payload.then(response => {
    const newAction = { ...action, payload: response }
    dispatch(newAction)
  })
}
