import {configureStore} from "@reduxjs/toolkit";
import counterReducer from 'modules/Counter/redux/CounterSlice'
import coursesReducer from 'modules/Courses/redux/coursesSlice'
import airplanesReducer from "modules/AirPlanes/redux/airplanesSlice";


export default configureStore({
  reducer: {
    counter: counterReducer,
    courses: coursesReducer,
    airplanes: airplanesReducer,
  }
})
