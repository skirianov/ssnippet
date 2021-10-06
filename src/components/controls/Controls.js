import React, { useState } from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel
 } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { changeHeaderColor, changeTextAreaColor, changeMainColor, changeTokens } from './buttons/themeReducer';

import RadioInput from './radioInput/radioInput';
import Button from './buttons/Button';
import ThemeControls from './themes/themeControls';

const Controls = () => {
  const theme = useSelector(state => state.theme.value);
  const [headerColor, setHeaderColor] = useState(theme.btnsBackgroundColor);
  const [textAreaColor, setTextAreaColor] = useState(theme.textAreaBg);
  const [mainBgColor, setMainBgColor] = useState(theme.mainBgColor);
  const [tokens, setTokens] = useState(theme.tokens);
  const [radio, setRadio] = useState('comments');

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

  return (
    <Box display='flex'>
      <Accordion defaultIndex={[0]} allowMultiple={true} w="100%" fontFamily="Open Sans">
        <AccordionItem >
          <h2>
            <AccordionButton bg="rgba(0,0,0,0.5)" _hover fontSize="xl">
              <Box flex="1" textAlign="left">
                Themes
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Button text="win" />
            <Button text="lin" />
            <Button text="mac" />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton bg="rgba(0,0,0,0.5)" _hover fontSize="xl">
              <Box flex="1" textAlign="left">
                Colours
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display="flex">
            <ThemeControls color={headerColor} handler={handleHeaderChange} text={'header'} />
            <ThemeControls color={textAreaColor} handler={handleTextAreaChange} />
            <ThemeControls color={mainBgColor} handler={handleMainBgChange} />
            <ThemeControls color={tokens[radio]} handler={handleTokensChange} />
            <RadioInput radio={radio} handler={setRadio} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default Controls;
