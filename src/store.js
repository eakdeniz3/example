import { configureStore } from '@reduxjs/toolkit'
import {authSliceReducer} from './Auth/auth'

const store = configureStore({
  reducer: {
    auth: authSliceReducer
  }
})
export default store