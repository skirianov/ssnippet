import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Button = ({ type, content }) => {
  const theme = useSelector((state) => state.theme.value);
  let buttonContent = content;

  if (theme.name === 'mac') {
    buttonContent = null;
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
      w={theme.btnStyle.shape.width}
      h={theme.name === 'mac' ? '0.9rem' : '1.2rem'}
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
        {buttonContent}
      </Text>
    </Box>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Button;
