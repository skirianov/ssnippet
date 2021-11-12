import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './components/controls/themeReducer';
import drawerReducer from './components/controls/drawerThemes/drawerReducer';

export default configureStore({
  reducer: {
    theme: themeReducer,
    drawer: drawerReducer,
  },
});
