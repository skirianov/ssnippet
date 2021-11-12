import React, { useState } from 'react';
import { VStack, Flex } from '@chakra-ui/react';

import ColourPicker from '../colorControl/colourPicker';
import ColourButton from './colourButton/colourButton';
import RadioInput from './radioInput/radioInput';

const AdvancedColours = () => {
  const [type, setType] = useState('header');
  const [radio, setRadio] = useState('comment');

  const handleType = (e) => {
    setType(e.target.value);
  };

  return (
    <Flex h="full" flexDir="column" justifyContent="space-between">
      <VStack justifyContent="start">
        <ColourButton
          value="header"
          text="Header"
          onClick={handleType}
          type={type}
        />
        <ColourButton
          value="text"
          text="Text Area"
          onClick={handleType}
          type={type}
        />
        <ColourButton
          value="bg"
          text="Background"
          onClick={handleType}
          type={type}
        />
        <ColourButton
          value="tokens"
          text="Tokens"
          onClick={handleType}
          type={type}
        />
      </VStack>
      <Flex>
        {type === 'tokens' ? <RadioInput radio={radio} handler={setRadio} /> : null}
      </Flex>
      <Flex justifyContent="center">
        <ColourPicker type={type} radio={radio} />
      </Flex>
    </Flex>
  );
};

export default AdvancedColours;
