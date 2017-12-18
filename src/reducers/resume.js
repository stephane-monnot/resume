import {
  REQUEST_RESUME,
  RECEIVE_RESUME
} from '../actions';

const initialState = { isFetching: false };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_RESUME:
      return { ...state, isFetching: true };

    case RECEIVE_RESUME:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
