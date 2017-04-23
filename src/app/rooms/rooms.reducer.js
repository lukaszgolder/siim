import { handleActions } from 'redux-actions';
import { FETCH_ROOMS_SUCCESS } from './rooms.action-types';

export const roomsReducer = handleActions(
  {
    [FETCH_ROOMS_SUCCESS]: (state, { payload: { rooms } }) => ({
      rooms,
    }),
  },
  {},
);
