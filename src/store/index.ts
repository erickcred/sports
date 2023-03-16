import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import carrinhoResucer from './reducers/carrinho'
import favoritosResucer from './reducers/favoritos'
import api from '../services/ProdutosApi'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoResucer,
    favoritar: favoritosResucer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
