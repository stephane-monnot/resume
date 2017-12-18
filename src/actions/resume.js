export const REQUEST_RESUME = 'resume/request';
export const RECEIVE_RESUME = 'resume/receive';

export function requestResume(payload) {
  return {
    type: REQUEST_RESUME,
    payload
  }
}

export function receiveResume(data) {
  return {
    type: RECEIVE_RESUME,
    data,
    receivedAt: Date.now()
  }
}
