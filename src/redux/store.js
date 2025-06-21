import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice.js'
import booksApi from './features/book/booksApi.js'
import ordersApi from './features/order/ordersApi.js'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware,ordersApi.middleware),
})