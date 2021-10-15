import React, { useState } from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Button,
 } from '@chakra-ui/react';

import RadioInput from './radioInput/radioInput';
import ThemePicker from './buttons/themePicker';
import ThemeControls from './themes/colorControl';

const Controls = ({ isMobile }) => {
  const [type, setType] = useState('header');
  const [radio, setRadio] = useState('comments');

  const handleColorPicker = (e) => {
    setType(e.target.value);
  }

  return (
    <Box display='flex'>
      <Accordion defaultIndex={[0]} allowMultiple={true} w="100%" fontFamily="Open Sans">
        <AccordionItem >
          <h2>
            <AccordionButton bg="rgba(0,0,0,0.5)" _hover fontSize="xl">
              <Box flex="1" textAlign="left">
                Window style
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display="flex" flexDir="column">
            <Text>Select style</Text>
            <Box display="flex" mt={2} flexDir="column">
              <ThemePicker text="win" />
              <ThemePicker text="lin" />
              <ThemePicker text="mac" />
            </Box>
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
          <AccordionPanel pb={4} display="flex" flexDir="column" justifyContent="space-between">
            <Box my={2} display="flex" flexDir="row">
              <Button colorScheme="pink" value="header"  onClick={handleColorPicker} size={isMobile ? "xs" : "md"}  >Header</Button>
              <Button colorScheme="pink" value="text" mx={1} onClick={handleColorPicker} size={isMobile ? "xs" : "md"}>Text Area</Button>
              <Button colorScheme="pink" value="bg"  onClick={handleColorPicker} size={isMobile ? "xs" : "md"}>Background</Button>
              <Button colorScheme="pink" value="tokens" mx={1} onClick={handleColorPicker} size={isMobile ? "xs" : "md"}>Tokens</Button>
            </Box>
            <Box display={type === "tokens" ? "block" : "none"}>
              <RadioInput radio={radio} handler={setRadio} />
            </Box>
            <Box>
              <ThemeControls type={type} radio={radio} />
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default Controls;
