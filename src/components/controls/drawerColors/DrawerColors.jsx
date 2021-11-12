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
import { changeState } from '../drawerThemes/drawerReducer';
import AdvancedColours from '../advancedColours/AvancedColours';

const DrawerColor = () => {
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
      <Settings type="left" btnRef={btnRef} onClick={openDrawer} />
      <Drawer
        size="xs"
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement={isMobile ? 'bottom' : 'left'}
        closeOnOverlayClick={false}
      >
        <DrawerContent bg="#08090e" color="white">
          { isOpen ? <Settings onClick={closeDrawer} left="80" type="left" /> : null }
          <DrawerHeader>Advanced settings</DrawerHeader>
          <DrawerBody>
            <AdvancedColours />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerColor;
