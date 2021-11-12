import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Win from '../../../assets/windows.png';
import Mac from '../../../assets/mac.png';
import Lin from '../../../assets/linux.png';
import { changeToLin, changeToMac, changeToWin } from '../themeReducer';

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
      border="1px solid darkgray"
      cursor="pointer"
      _hover={{
        transform: 'scale(1.05)',
        border: '2px solid #f472b6',
        transition: 'transform 0.3s',
      }}
    >
      <Image src={btnObject.image} alt="window style" w={28} />
    </Box>
  );
};

ThemePicker.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ThemePicker;
