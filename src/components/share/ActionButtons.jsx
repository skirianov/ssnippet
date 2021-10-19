import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
} from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';

import Download from './buttons/Download';
import Settings from './buttons/Settings';
import { changeState } from '../controls/drawer/drawerReducer';

const ActionButtons = ({ btnRef, onOpen, isOpen }) => {
  const drawer = useSelector((state) => state.drawer.value);
  const dispatch = useDispatch();

  const mobileJustify = isMobile ? 'center' : null;
  const mobileMargin = isMobile ? 'auto' : { md: '9%', xl: '24%' };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent={drawer ? 'center' : mobileJustify}
      mx={drawer ? 'auto' : mobileMargin}
      mt={4}
    >
      <Download color={isOpen ? 'gray' : '#bed04a'} />
      <Settings btnRef={btnRef} onClick={() => { onOpen(); dispatch(changeState(isOpen)); }} color={isOpen ? 'gray' : '#d53f8c'} />
    </Box>
  );
};

ActionButtons.propTypes = {
  btnRef: PropTypes.element.isRequired,
  onOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ActionButtons;
