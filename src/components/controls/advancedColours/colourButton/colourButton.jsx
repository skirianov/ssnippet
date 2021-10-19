import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';

const ColourButton = ({ value, onClick, text }) => {
  return (
    <Button
      colorScheme="pink"
      value={value}
      mx={1}
      onClick={onClick}
      size={isMobile ? 'xs' : 'md'}
    >
      {text}
    </Button>
  );
};

ColourButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ColourButton;
