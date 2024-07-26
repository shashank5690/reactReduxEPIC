import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import firstPageSlice from './slices/firstPageSlice';
import secondPageSlice from './slices/secondPageSlice';
import { firstPageEpic } from './epics/firstPageEpic';
import { secondPageEpic } from './epics/secondPageEpic';

export const rootReducer = combineReducers({
  firstPage: firstPageSlice.reducer,
  secondPage: secondPageSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const rootEpic = combineEpics(firstPageEpic, secondPageEpic);

