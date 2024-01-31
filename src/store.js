import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { articleApi } from './Services/API' // ici on a changé

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer, // ici on a changé
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware), // ici on a changé
})

setupListeners(store.dispatch)