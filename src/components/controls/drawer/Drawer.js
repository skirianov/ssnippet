import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react"

import Controls from '../Controls';
import Settings from '../../settings/Settings';
import Share from '../../share/Share';
import { changeState } from './drawerReducer';

const DrawerComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()

  const dispatch = useDispatch();
 
  return (
    <>
    <Settings ref={btnRef} onClick={() => { onOpen();  dispatch(changeState(isOpen))}} color={isOpen ? 'gray' : "#d53f8c"} />
    <Share />
    <Drawer
        size="lg"
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement="right"
        closeOnOverlayClick={false}
      >
        <DrawerContent bg="#181d45" color="white">
          <DrawerCloseButton bg="#d53f8c" color="white" size="lg" _active="#b83280" onClick={() => {onClose(); dispatch(changeState(isOpen))}}/>
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
