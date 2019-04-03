import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles actions of type SAVE_COMMENT', () => {
  // give it a fake action, we dont have to call actual action
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }
  const newState = commentsReducer([], action)

  expect(newState).toEqual(['New Comment'])
})

// passing in empty object is same as passing in an unknown type because it has unknown type. Or can be explicit and pass in random value for type
it('handles action with unknown type', () => {
  const newState = commentsReducer([], { type: '2342' })
  expect(newState).toEqual([])
})
