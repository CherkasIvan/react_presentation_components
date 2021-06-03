import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../modules/Counter/redux/counterSlice'
import coursesReducer from '../modules/Courses/redux/coursesSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    courses: coursesReducer,
  }
})
