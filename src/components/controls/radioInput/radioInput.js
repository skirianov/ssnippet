import React from 'react';
import { Radio, RadioGroup, Stack } from "@chakra-ui/react"

const RadioInput = ({radio, handler}) => {

  return (
    <RadioGroup onChange={value => handler(value)} value={radio}>
      <Stack direction="row">
        <Radio value="comments">Comments</Radio>
        <Radio value="keywords">Keywords</Radio>
        <Radio value="operators">Operators</Radio>
      </Stack>
    </RadioGroup>
  )
}

export default RadioInput;
