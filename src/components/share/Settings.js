import React from 'react';
import { Button } from '@chakra-ui/react';
import { IoSettingsOutline } from 'react-icons/io5';

const Settings = ({ btnRef, onClick, color }) => {
  return (
    <Button
      ref={btnRef}
      onClick={onClick}
      leftIcon={<IoSettingsOutline size="1.7em" />}
      bg={color}
      color="white"
      variant="solid"
      w={32}
      m={2}
    >
      Settings
    </Button>
  );
};

export default Settings;
