import React from 'react';
import { Box } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';

import EditorMain from '../editorMain/EditorMain';
import ActionButtons from '../share/ActionButtons';
import DrawerComponent from '../controls/drawerThemes/Drawer';
import ThemeControl from '../controls/themeControl/themeControl';
import DrawerColor from '../controls/drawerColors/DrawerColors';
import DrawerMobile from '../controls/drawerMobile/drawerMobile';

const Main = () => {
  return (
    <Box display="flex" flexDir="column" justifyContent="center">
      {isMobile ? null : <ThemeControl />}
      <EditorMain />
      {isMobile
        ? <DrawerMobile />
        : (
          <>
            <DrawerComponent />
            <DrawerColor />
          </>
        )}
      <ActionButtons />
    </Box>
  );
};

export default Main;
