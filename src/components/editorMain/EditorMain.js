import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import Window from './window/Window';

const EditorMain = () => {
  const theme = useSelector(state => state.theme.value);

  return (
    <Box
      bg={theme.mainBgColor}
      w={{ base: '90%', md: '75%', lg: '65%' }}
      mx="auto"
      p={[4, 8, 12]}
    >
      <Window />
    </Box>
  );
};

export default EditorMain;
