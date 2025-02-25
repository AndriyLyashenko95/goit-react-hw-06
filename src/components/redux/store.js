import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contactsSlice";
import visibleReducer from "./visibleSlice";
import { filterReducer } from "./filtersSlice";

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer (persistConfig, contactsReducer),
    filters: filterReducer,
    visible: visibleReducer,
  },
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);