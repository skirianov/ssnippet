import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import TextArea from './textArea/TextArea';
import Buttons from './buttons/Buttons';

const Window = () => {
  const theme = useSelector(state => state.theme.value);
  return (
    <Box borderRadius={theme.btnsBorderRadius} bg={theme.textAreaBg} boxShadow="dark-lg" display="flex" flexDir="column">
      <Buttons theme={theme} />
      <Box display="flex" w="100%" bg="transparent">
        <TextArea />
      </Box>
    </Box>
  )
}

export default Window;
