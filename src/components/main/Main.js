import React from 'react';
import { Box } from '@chakra-ui/react';

import EditorMain from '../editorMain/EditorMain';

const Main = () => {
  return (
    <Box display="flex" flexDir="column">
      <EditorMain />
    </Box>
  )
}

export default Main;
