import React from 'react';
import PropTypes from 'prop-types';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

const RadioInput = ({ radio, handler }) => {
  return (
    <RadioGroup onChange={(value) => { return handler(value); }} value={radio}>
      <Stack direction="column">
        <Radio value="comment">Comments</Radio>
        <Radio value="keywords">Keywords</Radio>
        <Radio value="operator">Operators</Radio>
        <Radio value="function">Functions</Radio>
        <Radio value="string">Strings</Radio>
        <Radio value="variable">Variables</Radio>
        <Radio value="parameter">Parameters</Radio>
        <Radio value="number">Numbers</Radio>
      </Stack>
    </RadioGroup>
  );
};

RadioInput.propTypes = {
  radio: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default RadioInput;
