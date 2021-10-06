import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react"

import Controls from '../Controls';
import Settings from '../../settings/Settings';

const DrawerComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()
 
  return (
    <>
    <Settings ref={btnRef} onClick={onOpen} />
    <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement="bottom"
        closeOnOverlayClick={false}
        
      >
        <DrawerContent bg="#181d45" color="white">
          <DrawerCloseButton bg="#d53f8c" color="white" size="lg" _active="#b83280"/>
          <DrawerHeader>Settings</DrawerHeader>

          <DrawerBody>
            <Controls />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerComponent;
