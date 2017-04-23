import { CALL_API } from 'redux-api-middleware';

import { FETCH_ROOMS_REQUEST, FETCH_ROOMS_SUCCESS, FETCH_ROOMS_FAILURE } from './rooms.action-types';

export const fetchRooms = () => ({
  [CALL_API]: {
    types: [FETCH_ROOMS_REQUEST, FETCH_ROOMS_SUCCESS, FETCH_ROOMS_FAILURE],
    endpoint: '/mocks/rooms.json',
    method: 'GET',
  },
});
