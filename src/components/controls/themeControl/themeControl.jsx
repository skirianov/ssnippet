import React from 'react';
import { useSelector } from 'react-redux';
import {
  HStack,
  ScaleFade,
  Box,
  Heading,
} from '@chakra-ui/react';
import ThemePicker from './themePicker';

const ThemeControl = () => {
  const drawer = useSelector((state) => state.drawer.value);

  return (
    <Box m="auto">

      {drawer ? (
        <ScaleFade in={drawer}>
          <HStack spacing={6} my={4} h={10}>
            <ThemePicker text="mac" />
            <ThemePicker text="win" />
            <ThemePicker text="lin" />
          </HStack>
        </ScaleFade>
      ) : <Heading h={10} my={4} color="gray.300">Preview</Heading>}
    </Box>
  );
};

export default ThemeControl;
