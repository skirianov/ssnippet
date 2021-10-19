import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"
import { isMobile } from 'react-device-detect';

import Controls from '../Controls';
import { changeState } from './drawerReducer';

const DrawerComponent = ({ isOpen, onOpen, onClose, btnRef }) => {
  const dispatch = useDispatch();
  return (
    <>
    <Drawer
        size="md"
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement={isMobile ? "bottom" : "right"}
        closeOnOverlayClick={false}
      >
        <DrawerContent bg="#181d45" color="white">
          <DrawerCloseButton bg="#d53f8c" color="white" size="lg"  onClick={() => {onClose(); dispatch(changeState(isOpen))}}/>
          <DrawerHeader>Settings</DrawerHeader>
          <DrawerBody>
            <Controls isMobile={isMobile} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerComponent;
