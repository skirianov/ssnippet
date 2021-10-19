import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import { MdMinimize, MdOutlineCropSquare, MdOutlineClose } from 'react-icons/md';

import Button from './button/Button';
import WindowName from './windowName/WindowName';

const Buttons = ({ theme }) => {
  const {
    btnsPosition,
    btnsDirection,
    btnsBackgroundColor,
    btnsBorderRadius,
    btnsPadding,
  } = theme;

  return (
    <Box
      display="flex"
      justifyContent={btnsPosition}
      alignItems="center"
      flexDir={btnsDirection}
      bg={btnsBackgroundColor}
      borderTopLeftRadius={btnsBorderRadius}
      borderTopRightRadius={btnsBorderRadius}
      p={btnsPadding}
    >
      <Button type="close" content={<MdOutlineClose />} />
      <Button type="resize" content={<MdOutlineCropSquare />} />
      <Button type="minimize" content={<MdMinimize />} />
      <WindowName />
    </Box>
  );
};

Buttons.propTypes = {
  theme: PropTypes.shape({
    btnsPosition: PropTypes.string.isRequired,
    btnsDirection: PropTypes.string.isRequired,
    btnsBackgroundColor: PropTypes.string.isRequired,
    btnsBorderRadius: PropTypes.string.isRequired,
    btnsPadding: PropTypes.string.isRequired,
  }).isRequired,
};

export default Buttons;
