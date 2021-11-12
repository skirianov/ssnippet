import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

export const drawerSlicer = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    changeState: (state, action) => {
      const newState = state;
      newState.value = action.payload;
    },
  },
});

export const { changeState } = drawerSlicer.actions;

export default drawerSlicer.reducer;

export const selectDrawer = (state) => state.value;
