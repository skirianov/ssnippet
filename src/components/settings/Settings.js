import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { IoSettingsOutline } from "react-icons/io5";


const Settings = ({ ref, onClick, color }) => {

  return (
    <Button
    position="absolute"
      ref={ref}
      onClick={onClick}
      leftIcon={<IoSettingsOutline size="1.7em" />}
      bg={color}
      color="white"
      variant="solid"
      w={32}
      mt={4}
      left={{ base: "38%", md:"66%" }}
    >
      Settings
    </Button>
  )
}

export default Settings;
