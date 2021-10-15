import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import TextArea from './textArea/TextArea';
import Buttons from './buttons/Buttons';

const Window = () => {
  const theme = useSelector(state => state.theme.value);
  return (
    <Box
      borderRadius={theme.btnsBorderRadius+5}
      bg={theme.textAreaBg}
      display="flex"
      flexDir="column"
      shadow="dark-lg"
    >
      <Buttons theme={theme} />
      <Box display="flex" w="100%" bg="transparent">
        <TextArea />
      </Box>
    </Box>
  );
};

export default Window;
