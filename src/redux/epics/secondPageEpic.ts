import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { decrementbyOne } from '../slices/secondPageSlice';
import { Action } from 'redux';
import { Observable } from 'rxjs';

export const secondPageEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(decrementbyOne.type),
    map(() => {
      console.log('Count decreased by 1');
      // Here you might want to dispatch a new action or handle side effects
      // For example: return { type: 'SOME_OTHER_ACTION' };
      return { type: 'NO_OP' }; // Placeholder action to avoid infinite loop
    })
  );
