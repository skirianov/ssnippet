import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Win from '../../../../assets/windows.png';
import Mac from '../../../../assets/mac.png';
import Lin from '../../../../assets/linux.png';
import { changeToLin, changeToMac, changeToWin } from './themeReducer';

const ThemePicker = ({ text }) => {
  const dispatch = useDispatch();

  const isLin = text === 'lin'
    ? { action: changeToLin, image: Lin, label: 'Linux' }
    : { action: changeToMac, image: Mac, label: 'Mac OS' };

  const btnObject = text === 'win'
    ? { action: changeToWin, image: Win, label: 'Windows' }
    : isLin;

  return (
    <Box
      onClick={() => dispatch(btnObject.action())}
      m={4}
      cursor="pointer"
      _hover={{
        backgroundColor: 'rgba(0,0,0,0.2)',
      }}
    >
      <Text>{btnObject.label}</Text>
      <Image src={btnObject.image} alt="window style" w={36} />
    </Box>
  );
};

ThemePicker.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ThemePicker;
