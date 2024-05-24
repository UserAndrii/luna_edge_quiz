import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { quizes } from './slice';

const authPersistConfig = {
  key: 'quizes',
  storage,
};

export const store = configureStore({
  reducer: {
    quizes: persistReducer(authPersistConfig, quizes),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type IAppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;
