import React from 'react';
import { Box } from '@chakra-ui/react';

import Heading from './components/heading/Heading';
import Main from './components/main/Main';
import DrawerComponent from './components/controls/drawer/Drawer';

function App() {
  return (
    <Box>
      <Heading />
      <Main />
      <DrawerComponent />
    </Box>
  );
}

export default App;
