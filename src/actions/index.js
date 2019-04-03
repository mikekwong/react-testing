import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types'
import axios from 'axios'

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

export const fetchComments = () => {
  try {
    const res = axios.get('http://jsonplaceholder.typicode.com/comments')
    return {
      type: FETCH_COMMENTS,
      payload: res
    }
  } catch (error) {
    console.error(error)
  }
}
