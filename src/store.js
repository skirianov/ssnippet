import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './components/controls/buttons/themeReducer';
import drawerReducer from './components/controls/drawer/drawerReducer';

export default configureStore({
  reducer: {
    theme: themeReducer,
    drawer: drawerReducer,
  }
})
