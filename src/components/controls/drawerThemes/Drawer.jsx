import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
import Settings from '../Settings';
import { changeState } from './drawerReducer';

import Controls from '../Controls';

const DrawerComponent = () => {
  const dispatch = useDispatch();
  const btnRef = React.useRef();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const closeDrawer = () => {
    onClose();
    dispatch(changeState(isOpen));
  };

  const openDrawer = () => {
    onOpen();
    dispatch(changeState(isOpen));
  };

  return (
    <>
      <Settings btnRef={btnRef} type="right" right="0" onClick={openDrawer} />
      <Drawer
        size="xs"
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement={isMobile ? 'bottom' : 'right'}
        closeOnOverlayClick={false}
      >
        <DrawerContent bg="#08090e" color="white">
          { isOpen ? <Settings onClick={closeDrawer} right="80" type="right" /> : null }
          <DrawerHeader>Themes</DrawerHeader>
          <DrawerBody>
            <Controls isMobile={isMobile} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
