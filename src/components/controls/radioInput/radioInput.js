import React from 'react';
import { Radio, RadioGroup, Stack } from "@chakra-ui/react"

const RadioInput = ({radio, handler}) => {

  return (
    <RadioGroup onChange={value => handler(value)} value={radio}>
      <Stack direction="column">
        <Radio value="comments">Comments</Radio>
        <Radio value="keywords">Keywords</Radio>
        <Radio value="operators">Operators</Radio>
        <Radio value="functions">Functions</Radio>
        <Radio value="properties">Properties</Radio>
        <Radio value="punctuation">Punctuation</Radio>
        <Radio value="strings">Strings</Radio>
        <Radio value="variables">Variables</Radio>
      </Stack>
    </RadioGroup>
  )
}

export default RadioInput;
