import React from 'react';
import { Button } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';

const ColourButton = ({ value, onClick, text }) => {
  return (
    <Button colorScheme="pink" value={value} mx={1} onClick={onClick} size={isMobile ? "xs" : "md"}  >{text}</Button>
  )
}

export default ColourButton;
