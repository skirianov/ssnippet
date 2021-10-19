import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Box,
} from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';

import Download from './buttons/Download';
import Settings from './buttons/Settings';
import { changeState } from '../controls/drawer/drawerReducer';

const ActionButtons = ({ btnRef, onOpen, isOpen}) => {
  const drawer = useSelector(state => state.drawer.value);
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent={ drawer ? "center" : isMobile ? "center" : null}
      mx={ drawer ? "auto" : isMobile ? "auto" : { md: '9%', xl: '24%' }}
      mt={4}
    >
      <Download color={isOpen ? 'gray' : "#bed04a"}/>
      <Settings btnRef={btnRef} onClick={() => { onOpen();  dispatch(changeState(isOpen))}} color={isOpen ? 'gray' : "#d53f8c"} />
    </Box>
  )
}

export default ActionButtons;
