import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../modules/Counter/redux/counterSlice'


export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
