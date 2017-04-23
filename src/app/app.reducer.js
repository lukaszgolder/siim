import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import { roomsReducer as rooms } from './rooms/rooms.reducer';

export const appReducer = combineReducers({
  rooms,
  routing,
});
