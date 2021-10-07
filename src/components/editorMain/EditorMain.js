import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import Window from './window/Window';

const EditorMain = () => {
  const theme = useSelector(state => state.theme.value);
  const drawerState = useSelector(state => state.drawer.value);

  return (
    <Box bg={theme.mainBgColor} w={{ base: "90%", md: "75%", lg: "55%"}} mx={{ base: "auto", lg: drawerState ? "auto" : 24}} p={[4, 8, 12]} style={{ transition: "margin 1100ms"}}>
      <Window />
    </Box>
  )
}

export default EditorMain;
