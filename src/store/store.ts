import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from "./favorites/favorites.slice.ts";
import {api} from "./api/api.ts";
import {userSlice} from "./user/user.slice.ts";
import {createLogger} from "redux-logger";

const logger = createLogger({
  collapsed: true
})

const reducers = combineReducers({
  favorites: favoritesReducer,
  user: userSlice.reducer,
  [api.reducerPath]: api.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>