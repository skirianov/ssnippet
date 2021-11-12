import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  ScaleFade,
} from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';

import Download from './buttons/Download';

const ActionButtons = () => {
  const drawer = useSelector((state) => state.drawer.value);

  const mobileJustify = isMobile ? 'center' : null;

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent={drawer ? 'center' : mobileJustify}
      mx="auto"
      mt={4}
    >
      <ScaleFade in={drawer}>
        <Download />
      </ScaleFade>
    </Box>
  );
};

export default ActionButtons;
