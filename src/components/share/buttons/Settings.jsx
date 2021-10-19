import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import { IoSettingsOutline } from 'react-icons/io5';

const Settings = ({ btnRef, onClick, color }) => {
  return (
    <Button
      ref={btnRef}
      onClick={onClick}
      leftIcon={<IoSettingsOutline size="1.7em" />}
      bg={color}
      color="white"
      variant="solid"
      w={32}
      m={2}
    >
      Settings
    </Button>
  );
};

Settings.propTypes = {
  btnRef: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Settings;
