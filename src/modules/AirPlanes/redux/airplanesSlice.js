import {createSlice} from '@reduxjs/toolkit'

export const airplanesSlice = createSlice({
  name: 'AIRPLANES',
  initialState: {
    directions: [
      {
        id: '1',
        title: 'boeng',
        startDate: 'june 27',
        timeInAir: '30 min',
        fly: false
      },
      {
        id: '2',
        title: 'flyEmirates',
        startDate: 'june 29',
        timeInAir: '2 hours',
        fly: false
      },
      {
        id: '3',
        title: 'PornHub',
        startDate: 'june 30',
        timeInAir: '6 hours',
        fly: false
      },
      {
        id: '4',
        title: 'ElAl',
        startDate: 'june 31',
        timeInAir: '2 days',
        fly: false
      },
      {
        id: '5',
        title: 'Belavia',
        startDate: 'june 32',
        timeInAir: '32 days',
        fly: true
      },
    ]
  },
  reducers: {
    changeFavoriteStatus: (state, action) => {
      console.log(action)
      const airplanes = state.directions.filter((item) => item.id === action.payload.id);
      airplanes[0].fly = !airplanes[0].fly;
    }
  }
})

export const airplanesActionTypes = airplanesSlice.actions

export default airplanesSlice.reducer