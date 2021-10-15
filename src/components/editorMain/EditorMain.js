import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import Window from './window/Window';

const EditorMain = () => {
  const theme = useSelector(state => state.theme.value);
  const drawer = useSelector(state => state.drawer.value);

  console.log(drawer);

  return (
    <Box
      id="ssnippet"
      bg={theme.mainBgColor}
      w={ drawer ? { base: '90%', md: '75%', lg: '65%', '2xl': '55%' } : { base: '90%', md: '35%', xl: '45%' }}
      mx={ drawer ? "auto" : { base: 'auto', md: '8%', xl: '12%' }}
      p={[4, 8, 12]}
      transition="width 500ms"
    >
      <Window />
    </Box>
  );
};

export default EditorMain;
