import { configureStore } from '@reduxjs/toolkit'
import appReducer from 'redux/reducers/app'
export const store = configureStore({
  reducer: {
    app: appReducer,
  },
})

