import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // 리듀서 추가

export const store = configureStore({
  reducer: {
    counter: counterReducer, // 리듀서를 등록
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
