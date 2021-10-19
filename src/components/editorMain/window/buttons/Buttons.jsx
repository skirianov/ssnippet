import React from 'react';
import { Box } from '@chakra-ui/react';
import { MdMinimize } from 'react-icons/md';
import { MdOutlineCropSquare } from 'react-icons/md';
import { MdOutlineClose } from 'react-icons/md';

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

export default Buttons;
