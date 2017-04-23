import { roomsReducer } from './rooms.reducer';
import * as types from './rooms.action-types';

describe('Rooms reducer', () => {
  it('return default state', () => {
    expect(roomsReducer(undefined, {})).toEqual({});
  });

  it('assigns fetched rooms', () => {
    expect(roomsReducer({}, { type: types.FETCH_ROOMS_SUCCESS, payload: { rooms: ['foo', 'bar'] } })).toEqual({
      rooms: ['foo', 'bar'],
    });
  });
});
