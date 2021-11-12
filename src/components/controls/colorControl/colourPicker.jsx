import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ChromePicker } from 'react-color';
import { Box, Text } from '@chakra-ui/react';

import {
  changeHeaderColor,
  changeTextAreaColor,
  changeMainColor,
  changeTokens,
} from '../themeReducer';

const ColourPicker = ({ type, radio }) => {
  const theme = useSelector((state) => state.theme.value);
  const [tokens] = useState(theme.tokens);
  const [text, setText] = useState('');
  const [color, setColor] = useState('#000');
  const dispatch = useDispatch();

  const handleHeaderChange = (newcolor) => {
    dispatch(changeHeaderColor(newcolor.hex));
    setColor(newcolor.hex);
  };

  const handleTextAreaChange = (newcolor) => {
    dispatch(changeTextAreaColor(newcolor.hex));
    setColor(newcolor.hex);
  };

  const handleMainBgChange = (newcolor) => {
    dispatch(changeMainColor(newcolor.hex));
    setColor(newcolor.hex);
  };

  const handleTokensChange = (newcolor) => {
    dispatch(changeTokens(tokens[radio]));
    setColor(newcolor.hex);
  };

  useEffect(() => {
    if (type === 'header') {
      setText('Header');
      setColor(theme.btnsBackgroundColor);
    } else if (type === 'text') {
      setText('Text Area');
      setColor(theme.textAreaBg);
    } else if (type === 'bg') {
      setText('Background');
      setColor(theme.mainBgColor);
    } else if (type === 'tokens') {
      setText('Tokens');
      setColor(theme.tokens[radio]);
    }
  }, [type]);

  return (
    <Box>
      <Text textAlign="center">{text}</Text>
      <ChromePicker
        disableAlpha
        color={color}
        onChange={(userColor) => setColor(userColor.hex)}
        onChangeComplete={(userColor) => {
          if (type === 'header') {
            handleHeaderChange(userColor);
          } else if (type === 'text') {
            handleTextAreaChange(userColor);
          } else if (type === 'bg') {
            handleMainBgChange(userColor);
          } else if (type === 'tokens') {
            handleTokensChange(userColor);
          }
        }}
      />
    </Box>
  );
};

ColourPicker.propTypes = {
  type: PropTypes.string.isRequired,
  radio: PropTypes.string.isRequired,
};

export default ColourPicker;
