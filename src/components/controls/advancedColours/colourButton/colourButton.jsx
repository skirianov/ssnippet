import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';

const ColourButton = ({
  value,
  onClick,
  text,
  type,
}) => {
  return (
    <Button
      bg={type === value ? 'white' : 'transparent'}
      color={type === value ? 'black' : 'white'}
      border="1px solid white"
      rounded="none"
      value={value}
      w="full"
      onClick={(e) => onClick(e)}
      size={isMobile ? 'xs' : 'md'}
      _hover={{
        bg: type === value ? 'white' : 'lightgray',
        color: 'black',
      }}
    >
      {text}
    </Button>
  );
};

ColourButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ColourButton;
