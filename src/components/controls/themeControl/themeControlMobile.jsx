import React from 'react';
import {
  HStack,
  Box,
} from '@chakra-ui/react';
import ThemePicker from './themePicker';

const ThemeControlMobile = () => {
  return (
    <Box m="auto">
      <HStack spacing={6} my={4} h={10}>
        <ThemePicker text="mac" />
        <ThemePicker text="win" />
        <ThemePicker text="lin" />
      </HStack>
    </Box>
  );
};

export default ThemeControlMobile;
