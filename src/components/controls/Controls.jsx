import React from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Flex,
} from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';

import colourSchemes from './colorControl/colourSchemes/colourSchemes';
import ColourTemplate from './colorControl/colourSchemes/colourTemplate';
import ThemeControlMobile from './themeControl/themeControlMobile';
import AdvancedColours from './advancedColours/AvancedColours';

const Controls = () => {
  return (
    isMobile
      ? (
        <>
          <Accordion defaultIndex={[0]} allowMultiple w="100%" fontFamily="Open Sans">
            <AccordionItem>
              <h2>
                <AccordionButton _hover fontSize="xl">
                  <Box flex="1" textAlign="left">
                    Window style
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} display="flex" flexDir="column">
                <Text>Select style</Text>
                <Box display="flex" mt={2} flexDir="column">
                  <ThemeControlMobile />
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton _hover fontSize="xl">
                  <Box flex="1" textAlign="left">
                    Colour Schemes
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} display="flex" flexDir="column" justifyContent="space-between">
                <Flex flexDir="column">
                  <ColourTemplate scheme={colourSchemes.monokai} text="Monokai" />
                  <ColourTemplate scheme={colourSchemes['github-dark']} text="Github Dark" />
                  <ColourTemplate scheme={colourSchemes.OneDark} text="One Dark" />
                  <ColourTemplate scheme={colourSchemes.VSCodeDark} text="VS Codev Dark" />
                  <ColourTemplate scheme={colourSchemes.VSCodeLight} text="VS Codev Light" />
                  <ColourTemplate scheme={colourSchemes.Abbyss} text="Abbyss" />
                  <ColourTemplate scheme={colourSchemes.monokai} text="Monokai" />
                  <ColourTemplate scheme={colourSchemes['github-dark']} text="Github Dark" />
                  <ColourTemplate scheme={colourSchemes.OneDark} text="One Dark" />
                  <ColourTemplate scheme={colourSchemes.VSCodeDark} text="VS Codev Dark" />
                  <ColourTemplate scheme={colourSchemes.VSCodeLight} text="VS Codev Light" />
                  <ColourTemplate scheme={colourSchemes.Abbyss} text="Abbyss" />
                  <ColourTemplate scheme={colourSchemes.monokai} text="Monokai" />
                  <ColourTemplate scheme={colourSchemes['github-dark']} text="Github Dark" />
                  <ColourTemplate scheme={colourSchemes.OneDark} text="One Dark" />
                  <ColourTemplate scheme={colourSchemes.VSCodeDark} text="VS Codev Dark" />
                  <ColourTemplate scheme={colourSchemes.VSCodeLight} text="VS Codev Light" />
                  <ColourTemplate scheme={colourSchemes.Abbyss} text="Abbyss" />
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton _hover fontSize="xl">
                  <Box flex="1" textAlign="left">
                    Advanced
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} display="flex" flexDir="column" justifyContent="space-between">
                <AdvancedColours />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </>
      )
      : (
        <Flex flexDir="column">
          <ColourTemplate scheme={colourSchemes.monokai} text="Monokai" />
          <ColourTemplate scheme={colourSchemes['github-dark']} text="Github Dark" />
          <ColourTemplate scheme={colourSchemes.OneDark} text="One Dark" />
          <ColourTemplate scheme={colourSchemes.VSCodeDark} text="VS Codev Dark" />
          <ColourTemplate scheme={colourSchemes.VSCodeLight} text="VS Codev Light" />
          <ColourTemplate scheme={colourSchemes.Abbyss} text="Abbyss" />
          <ColourTemplate scheme={colourSchemes.monokai} text="Monokai" />
          <ColourTemplate scheme={colourSchemes['github-dark']} text="Github Dark" />
          <ColourTemplate scheme={colourSchemes.OneDark} text="One Dark" />
          <ColourTemplate scheme={colourSchemes.VSCodeDark} text="VS Codev Dark" />
          <ColourTemplate scheme={colourSchemes.VSCodeLight} text="VS Codev Light" />
          <ColourTemplate scheme={colourSchemes.Abbyss} text="Abbyss" />
          <ColourTemplate scheme={colourSchemes.monokai} text="Monokai" />
          <ColourTemplate scheme={colourSchemes['github-dark']} text="Github Dark" />
          <ColourTemplate scheme={colourSchemes.OneDark} text="One Dark" />
          <ColourTemplate scheme={colourSchemes.VSCodeDark} text="VS Codev Dark" />
          <ColourTemplate scheme={colourSchemes.VSCodeLight} text="VS Codev Light" />
          <ColourTemplate scheme={colourSchemes.Abbyss} text="Abbyss" />
        </Flex>

      )
  );
};

export default Controls;
