import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { changeTheme } from '../../themeReducer';

const ColourTemplate = ({ scheme, text }) => {
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      alignItems="center"
      my={1}
      border="1px solid white"
      cursor="pointer"
      onClick={() => { dispatch(changeTheme(scheme)); }}
      _hover={{
        border: '2px solid #F472B6',
        transform: 'scale(1.05)',
        transition: 'transform ease-in-out 0.1s',
      }}
    >
      <Box
        bg="white"
        w={20}
        h={20}
        display="flex"
        flexDir="row"
        flexWrap="wrap"
        m={2}
      >
        <Box bg={scheme.btnsBackgroundColor} w={20} h={4} />
        <Box flex={1} flexDir="column" bg={scheme.textAreaBg} h={16}>
          <Box bg={scheme.tokens.function} w={8} h={1} m={2} />
          <Box bg={scheme.tokens.identifier} w={10} h={1} mx={4} />
          <Box bg={scheme.tokens.string} w={16} h={1} m={1} />
          <Box bg={scheme.tokens.number} w={14} h={1} m={1} />
          <Box bg={scheme.tokens.types} w={6} h={1} m={2} />
        </Box>
      </Box>
      <Text>{text}</Text>
    </Box>
  );
};

ColourTemplate.propTypes = {
  scheme: PropTypes.shape({
    btnsBackgroundColor: PropTypes.string.isRequired,
    textAreaBg: PropTypes.string.isRequired,
    tokens: PropTypes.shape({
      keywords: PropTypes.string.isRequired,
      function: PropTypes.string.isRequired,
      identifier: PropTypes.string.isRequired,
      string: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      types: PropTypes.string.isRequired,
    }),
  }).isRequired,
  text: PropTypes.string.isRequired,
};

export default ColourTemplate;
