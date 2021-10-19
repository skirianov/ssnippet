import React from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';

import EditorMain from '../editorMain/EditorMain';
import ActionButtons from '../share/ActionButtons';
import DrawerComponent from '../controls/drawer/Drawer';

const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box>
      <EditorMain />
      <ActionButtons isOpen={isOpen} onOpen={onOpen} btnRef={btnRef} />
      <DrawerComponent isOpen={isOpen} onOpen={onOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
};

export default Main;
