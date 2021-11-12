import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { isMobile } from 'react-device-detect';
import { changeState } from '../drawerThemes/drawerReducer';

import Controls from '../Controls';

const DrawerMobile = () => {
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
      <Button
        ref={btnRef}
        onClick={openDrawer}
        w={44}
        m="auto"
        mt={8}
        bg="#F472B6"
        color="white"
        leftIcon={<IoColorPaletteOutline size="1.7rem" />}
      >
        Customize
      </Button>
      <Drawer
        size="xs"
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement={isMobile ? 'bottom' : 'right'}
        closeOnOverlayClick={false}
      >
        <DrawerContent bg="#08090e" color="white">
          {isOpen
            ? (
              <Button
                ref={btnRef}
                onClick={closeDrawer}
                w={44}
                m="auto"
                mt={8}
                colorScheme="red"
                leftIcon={<IoColorPaletteOutline size="1.7rem" />}
              >
                Close
              </Button>
            )
            : null}
          <DrawerHeader>Themes</DrawerHeader>
          <DrawerBody>
            <Controls isMobile={isMobile} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMobile;
