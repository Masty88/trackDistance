import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import appReducer from './app/appSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck:
      false,

  })
});
