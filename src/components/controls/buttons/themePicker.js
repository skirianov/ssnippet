import React from 'react';
import Win from '../../../assets/windows.png';
import Mac from '../../../assets/mac.png';
import Lin from '../../../assets/linux.png';
import { Box, Image, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { changeToLin, changeToMac, changeToWin } from './themeReducer';


const ThemePicker = ({text}) => {
  const dispatch = useDispatch();

  const btnObject = {
    action: text === 'win' ? changeToWin : text === 'lin' ? changeToLin : changeToMac,
    image: text === 'win' ? Win : text === 'lin' ? Lin : Mac,
    label: text === 'win' ? "Windows" : text === 'lin' ? "Linux" : "MacOs",
  }


  return (
    <Box onClick={() => dispatch(btnObject.action())} m={4}>
      <Text>{btnObject.label}</Text>
      <Image
        src={btnObject.image}
        alt="Windows"
        w={48}
        h={36}
      />
    </Box>
  )
}

export default ThemePicker;
