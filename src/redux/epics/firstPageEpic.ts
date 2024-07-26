import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { incrementByTwo } from '../slices/firstPageSlice';
import { Action } from 'redux';
import { Observable } from 'rxjs';

export const firstPageEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(incrementByTwo.type),
    map(() => {
      console.log('Count increased by 2');
      // Here you might want to dispatch a new action or handle side effects
      // For example: return { type: 'SOME_OTHER_ACTION' };
      return { type: 'NO_OP' }; // Placeholder action to avoid infinite loop
    })
  );
