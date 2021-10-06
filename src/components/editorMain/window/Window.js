import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import LineNumber from './lineNumber/LineNumber';
import TextArea from './textArea/TextArea';
import Buttons from './buttons/Buttons';

const Window = () => {
  const theme = useSelector(state => state.theme.value);
  console.log(theme.btnsBorderRadius);
  return (
    <Box borderTopLeftRadius={theme.btnsBorderRadius} borderTopRightRadius={theme.btnsBorderRadius} bg={theme.textAreaBg}>
      <Buttons theme={theme} />
      <Box display="flex" w="100%" h="100%" bg="transparent">
        <LineNumber />
        <TextArea />
      </Box>
    </Box>
  )
}

export default Window;
