import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Button = ({ type, content }) => {
  const theme = useSelector(state => state.theme.value);

  if (theme.name === 'mac') {
    content = null;
  }

  let bgColor;

  switch (type) {
    case 'close':
      bgColor = theme.btnStyle.shape.backgroundColor.close;
      break;
    case 'minimize':
      bgColor = theme.btnStyle.shape.backgroundColor.min;
      break;
    case 'resize':
      bgColor = theme.btnStyle.shape.backgroundColor.res;
      break;
    default:
      bgColor = null;
  }

  return (
    <Box
      w={{ base: theme.btnStyle.shape.width - 1.5, sm: theme.btnStyle.shape.width - 1, md: theme.btnStyle.shape.width}}
      h={{ base: 2, sm: 3,  md: (theme.name === 'mac' ? '1rem' : '1.4rem')}}
      m={theme.btnStyle.shape.margin}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={bgColor}
      borderRadius={theme.btnStyle.shape.borderRadius}
    >
      <Text
        mixBlendMode={
          theme.name === 'lin' && type === 'close' ? null : 'difference'
        }
        color="white"
      >
        {content}
      </Text>
    </Box>
  );
};

export default Button;
