import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ListReducer from './reducers/ListReducer';

export const store = configureStore({
  reducer: {
    list: ListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
