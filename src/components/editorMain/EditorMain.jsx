import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';

import Window from './window/Window';

const EditorMain = () => {
  const theme = useSelector((state) => state.theme.value);
  const drawer = useSelector((state) => state.drawer.value);

  const mobileWidth = isMobile
    ? {
      base: '90%', md: '75%', lg: '65%', '2xl': '55%',
    }
    : { base: '90%', md: '35%', xl: '45%' };

  const mobileMargin = isMobile
    ? 'auto'
    : { base: 'auto', md: '8%', xl: '12%' };

  return (
    <Box
      id="ssnippet"
      bg={theme.mainBgColor}
      w={drawer ? {
        base: '90%', md: '75%', lg: '65%', '2xl': '55%',
      } : mobileWidth}
      mx={drawer ? 'auto' : mobileMargin}
      p={[4, 8, 12]}
      transition="width 500ms"
    >
      <Window />
    </Box>
  );
};

export default EditorMain;
