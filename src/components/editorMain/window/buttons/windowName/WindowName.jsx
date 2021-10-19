import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input } from '@chakra-ui/react';

const WindowName = () => {
  const [name, setName] = useState('ssnippet name...');
  const color = useSelector((state) => state.theme.value.color);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Input
      placeholder={name}
      onChange={handleChange}
      focusBorderColor="transparent"
      border="none"
      h={[4, 6, 8]}
      fontFamily="monospace"
      fontSize={{ base: '10px', sm: '12px', md: '14px' }}
      m="auto"
      textAlign="center"
      bg="transparent"
      w="90%"
      left="-3%"
      color={color}
    />
  );
};

export default WindowName;
