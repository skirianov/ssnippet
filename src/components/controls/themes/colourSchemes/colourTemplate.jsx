import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { changeTheme } from '../../drawer/windowThemes/themeReducer';

const ColourTemplate = ({ scheme, text }) => {
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
        onClick={() => { dispatch(changeTheme(scheme)); }}
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
  );
};

ColourTemplate.propTypes = {
  scheme: PropTypes.shape({
    textAreaBg: PropTypes.string.isRequired,
    tokens: PropTypes.shape({
      keywords: PropTypes.string.isRequired,
      function: PropTypes.string.isRequired,
      identifier: PropTypes.string.isRequired,
      string: PropTypes.string.isRequired,
    }),
  }).isRequired,
  text: PropTypes.string.isRequired,
};

export default ColourTemplate;
