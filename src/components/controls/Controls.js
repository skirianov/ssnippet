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

import ThemePicker from './buttons/themePicker';
import AdvancedColours from './advancedColours/AvancedColours';
import { colourSchemes } from './themes/colourSchemes/colourSchemes';
import ColourTemplate from './themes/colourSchemes/colourTemplate';

const Controls = ({ isMobile }) => {
  const [type, setType] = useState('header');
  const [radio, setRadio] = useState('comments');
  const [showAdvanced, setShowAdvanced] = useState(false);


  const handleColorPicker = (e) => {
    setType(e.target.value);
  }

  const showAdvancedSettings = () => {
    setShowAdvanced(showAdvanced => !showAdvanced);
    console.log(showAdvanced);
  };

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
                Colour Schemes
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display="flex" flexDir="column" justifyContent="space-between">
            <ColourTemplate scheme={colourSchemes.terminal} text="Original" />
            <ColourTemplate scheme={colourSchemes.monokai} text="Monokai" />
            <ColourTemplate scheme={colourSchemes["github-dark"]} text="Github Dark" />
            <ColourTemplate scheme={colourSchemes["OneDark"]} text="One Dark" />
            <Button
              w={32}
              onClick={showAdvancedSettings}
              colorScheme={showAdvanced ? "gray" : "pink"}
              color={showAdvanced ? 'blackAlpha.700' : "white"}
            >
              {showAdvanced ? "Hide Advanced" : "Show Advanced"}
            </Button>
            {showAdvanced ? <AdvancedColours type={type} handleColorPicker={handleColorPicker} radio={radio} setRadio={setRadio} /> : null}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default Controls;
