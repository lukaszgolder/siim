import { CALL_API } from 'redux-api-middleware';

import * as types from './rooms.action-types';
import * as actions from './rooms.actions';

describe('Rooms actions', () => {
  it('creates fetchRooms action', () => {
    expect(actions.fetchRooms()).toEqual({
      [CALL_API]: {
        types: [types.FETCH_ROOMS_REQUEST, types.FETCH_ROOMS_SUCCESS, types.FETCH_ROOMS_FAILURE],
        endpoint: '/mocks/rooms.json',
        method: 'GET',
      },
    });
  });
});
