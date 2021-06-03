import {createSlice} from '@reduxjs/toolkit'

export const coursesSlice = createSlice({
  name: 'COURSES  ',
  initialState: {
   directions:[
     {
       id: '1',
       title: 'front',
       startDate: 'june 25',
       duration: '8 months',
       favorite: false
     },
     {
       id: '2',
       title: 'back',
       startDate: 'june 25',
       duration: '8 months',
       favorite: false
     },
     {
       id: '1',
       title: 'QA',
       startDate: 'june 25',
       duration: '8 months',
       favorite: false
     },
   ]
  },
  reducers: {
    changeFavoriteStatus: (state, action)=>{
      const course = state.directions.filter(item=>item.id === action.payload.id);
      course[0].favorite=!course[0].favorite;
    }
  }
})

export const coursesActionTypes = coursesSlice.actions

export default coursesSlice.reducer