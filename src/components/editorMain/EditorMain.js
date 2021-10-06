import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import Window from './window/Window';

const EditorMain = () => {
  const theme = useSelector(state => state.theme.value);

  return (
    <Box bg={theme.mainBgColor} w={{ base: "80%", md: "75%"}} m="auto" p={12}>
      <Window />
    </Box>
  )
}

export default EditorMain;
