import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Button = ({ type, content }) => {
  const theme = useSelector(state => state.theme.value);

  if (theme.name === 'mac') {
    content = null;
  }

  let bgColor;
  
  switch (type) {
    case "close":
      bgColor = theme.btnStyle.shape.backgroundColor.close;
      break;
    case "minimize":
      bgColor = theme.btnStyle.shape.backgroundColor.min;
      break;
    case "resize":
      bgColor = theme.btnStyle.shape.backgroundColor.res;
      break;
    default:
      bgColor = null;
  }  

  return (
    <Box
      w={theme.btnStyle.shape.width}
      h={theme.name === 'mac' ? "1.1rem" : "1.4rem"}
      m={theme.btnStyle.shape.margin}
      textAlign="center"
      fontSize="lg"
      p="3px"
      bg={bgColor}
      borderRadius={theme.btnStyle.shape.borderRadius}
    >
      <Text mixBlendMode={theme.name === 'lin' && type === 'close' ? null : "difference"} color="white">
        {content}
      </Text>
    </Box>
  )
}

export default Button;