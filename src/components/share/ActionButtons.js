import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  Box,
} from '@chakra-ui/react';

import Download from './Download';
import Settings from './Settings';
import { changeState } from '../controls/drawer/drawerReducer';

const ActionButtons = ({ btnRef, onOpen, isOpen}) => {
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      mt={4}
    >
      <Download color={isOpen ? 'gray' : "#bed04a"}/>
      <Settings btnRef={btnRef} onClick={() => { onOpen();  dispatch(changeState(isOpen))}} color={isOpen ? 'gray' : "#d53f8c"} />
    </Box>
  )
}

export default ActionButtons;
