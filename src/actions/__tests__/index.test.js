import { SAVE_COMMENT } from 'actions/types'
import { saveComment } from 'actions'

describe('Name of the group', () => {
  it('has the correct type', () => {
    // directly call action creator and save to variable
    const action = saveComment()
    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('has the correct payload', () => {
    const action = saveComment('New Comment')
    expect(action.payload).toEqual('New Comment')
  })
})
