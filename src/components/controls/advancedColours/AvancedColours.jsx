import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import RadioInput from './radioInput/radioInput';
import ThemeControls from '../themes/colourPicker';
import ColourButton from './colourButton/colourButton';

const AdvancedColours = ({
  type, handleColorPicker, radio, setRadio,
}) => {
  return (
    <Box m="auto" display="flex" justifyContent="center" alignItems="center" flexDir="column">
      <Box my={2} display="flex" flexDir="row">
        <ColourButton
          value="header"
          onClick={handleColorPicker}
          text="Header"
        />
        <ColourButton
          value="text"
          onClick={handleColorPicker}
          text="Text Area"
        />
        <ColourButton
          value="bg"
          onClick={handleColorPicker}
          text="Background"
        />
        <ColourButton
          value="tokens"
          onClick={handleColorPicker}
          text="Tokens"
        />
      </Box>
      <Box display={type === 'tokens' ? 'block' : 'none'}>
        <RadioInput radio={radio} handler={setRadio} />
      </Box>
      <Box>
        <ThemeControls type={type} radio={radio} />
      </Box>
    </Box>
  );
};

AdvancedColours.propTypes = {
  type: PropTypes.string.isRequired,
  handleColorPicker: PropTypes.func.isRequired,
  radio: PropTypes.string.isRequired,
  setRadio: PropTypes.func.isRequired,
};

export default AdvancedColours;
