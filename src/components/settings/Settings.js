import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { IoSettingsOutline } from "react-icons/io5";


const Settings = ({ ref, onClick }) => {

  return (
    <Button
      ref={ref}
      onClick={onClick}
      leftIcon={<IoSettingsOutline size="1.7em" />}
      colorScheme="pink"
      variant="solid"
      w={32}
      mt={4}
      left={{ md:"66%" }}
    >
      Settings
    </Button>
  )
}

export default Settings;
