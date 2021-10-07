import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChromePicker } from 'react-color';
import { 
  Box,
  Text,
} from '@chakra-ui/react';

import { changeHeaderColor, changeTextAreaColor, changeMainColor, changeTokens } from '../buttons/themeReducer';


const ThemeControls = ({ type, radio }) => {
  const theme = useSelector(state => state.theme.value);
  const [headerColor, setHeaderColor] = useState(theme.btnsBackgroundColor);
  const [textAreaColor, setTextAreaColor] = useState(theme.textAreaBg);
  const [mainBgColor, setMainBgColor] = useState(theme.mainBgColor);
  const [tokens, setTokens] = useState(theme.tokens);

  const dispatch = useDispatch();

  const handleHeaderChange = (color) => {
    setHeaderColor(color.hex);
    dispatch(changeHeaderColor(color.hex));
  }

  const handleTextAreaChange = (color) => {
    setTextAreaColor(color.hex);
    dispatch(changeTextAreaColor(color.hex));
  }

  const handleMainBgChange = (color) => {
    setMainBgColor(color.hex);
    dispatch(changeMainColor(color.hex));
  }

  const handleTokensChange = (color) => {
    setTokens({...tokens, [radio]: color.hex})
    dispatch(changeTokens(tokens));
  }  

  let text;
  let color;
  let action;

  switch (type) {
    case "header":
      action = handleHeaderChange;
      color = headerColor;
      text = "Header"
      break;
    case "text":
      action = handleTextAreaChange;
      color = textAreaColor;
      text = "Text Area"
      break;
    case "bg":
      action = handleMainBgChange;
      color = mainBgColor;
      text = "Background";
      break;
    case "tokens":
      action = handleTokensChange;
      color = tokens[radio];
      text = "Tokens"
      break;
    default:
      return null;
  }

  return (
    <Box>
      <Text textAlign="center">{text}</Text>
      <ChromePicker disableAlpha color={color} onChange={action} />
    </Box>
  )
}

export default ThemeControls;
