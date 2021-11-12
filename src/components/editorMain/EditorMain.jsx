import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';

import Window from './window/Window';

const EditorMain = () => {
  const theme = useSelector((state) => state.theme.value);

  const mobileWidth = isMobile
    ? {
      base: '90%', md: '75%', lg: '65%', '2xl': '55%',
    }
    : { base: '90%', md: '75%', xl: '40%' };

  const mobileMargin = isMobile
    ? { base: 'auto', md: '18%', xl: '20%' }
    : 'auto';

  return (
    <Box
      id="ssnippet"
      bg={theme.mainBgColor}
      w={mobileWidth}
      mx={mobileMargin}
      p={[4, 8, 12, 16]}
      transition="width 500ms"
    >
      <Window />
    </Box>
  );
};

export default EditorMain;
