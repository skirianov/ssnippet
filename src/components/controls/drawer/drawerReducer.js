import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

export const drawerSlicer = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    changeState: (state, action) => {
      state.value = action.payload;
    },
  }
});

export const {changeState} = drawerSlicer.actions;

export default drawerSlicer.reducer;

export const selectDrawer = state => state.value;
