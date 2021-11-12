import React from 'react';
import PropTypes from 'prop-types';
import { Box, keyframes } from '@chakra-ui/react';
import { IoSettingsOutline, IoColorPaletteOutline } from 'react-icons/io5';

const spin = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

const Settings = (
  {
    btnRef,
    type,
    right,
    left,
    onClick,
  },
) => {
  const animation = `${spin} infinite 3s linear`;

  return (
    <Box
      as="button"
      ref={btnRef}
      display="flex"
      justifyContent="center"
      color="white"
      border="1px solid white"
      w={12}
      position="fixed"
      top={96}
      right={type === 'right' ? right : null}
      left={type === 'right' ? null : left}
      transition="right 0.3s ease-in-out transform 1s"
      alignItems="center"
      h={24}
      onClick={onClick}
    >
      <Box animation={type === 'right' ? null : animation}>
        {type === 'right'
          ? <IoColorPaletteOutline size="1.7em" />
          : <IoSettingsOutline size="1.7em" />}
      </Box>
    </Box>
  );
};

Settings.propTypes = {
  btnRef: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Settings;
