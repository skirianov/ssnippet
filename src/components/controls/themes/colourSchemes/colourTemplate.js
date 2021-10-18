import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { changeTheme } from '../../buttons/themeReducer';

const ColourTemplate = ({scheme, text}) => {

  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      alignItems="center"
    >
      <Box
      bg="white"
      w={24}
      h={24}
      display="flex"
      flexDir="column"
      flexWrap="wrap"
      onClick={() => {dispatch(changeTheme(scheme))}}
      cursor="pointer"
      m={2}
    >
      <Box bg={scheme.textAreaBg} w={12} h={24} />
      <Box bg={scheme.tokens.keywords} w={12} h={6} />
      <Box bg={scheme.tokens.function} w={12} h={6} />
      <Box bg={scheme.tokens.identifier} w={12} h={6} />
      <Box bg={scheme.tokens.string} w={12} h={6} />
    </Box>
      <Text>{text}</Text>
    </Box>
  )
}

export default ColourTemplate;
