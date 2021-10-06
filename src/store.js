import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './components/controls/buttons/themeReducer';

export default configureStore({
  reducer: {
    theme: themeReducer,
  }
})
