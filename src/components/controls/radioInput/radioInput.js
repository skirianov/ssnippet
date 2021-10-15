import React from 'react';
import { Radio, RadioGroup, Stack } from "@chakra-ui/react"

const RadioInput = ({radio, handler}) => {

  return (
    <RadioGroup onChange={value => handler(value)} value={radio}>
      <Stack direction="column">
        <Radio value="comment">Comments</Radio>
        <Radio value="keywords">Keywords</Radio>
        <Radio value="operator">Operators</Radio>
        <Radio value="function">Functions</Radio>
        <Radio value="string">Strings</Radio>
        <Radio value="variable">Variables</Radio>
        <Radio value="parameter">Parameters</Radio>
      </Stack>
    </RadioGroup>
  )
}

export default RadioInput;
