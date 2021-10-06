import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import styled from 'styled-components';
import Number from './number/Number';

const LineNumber = () => {
  const [lines, setLines] = useState(1);
  const [linesArr, setLinesArr] = useState([1]);

  useEffect(() => {
    let textArea = document.getElementById('textArea');

    function countLines() {
      let text = textArea.value.replace(/\r\n/g,"\n").replace(/\r/g,"")
        .split(/\n/g);

      setLines(text.length);
    }

    textArea.onkeyup = countLines;
  }, [])

  let arrayOfLines = [];

  for (let i = 1; i <= lines; i++){
    arrayOfLines.push(i);
  }

  useEffect(() => {
    setLinesArr(arrayOfLines);
  }, [lines])

  return(
    <Box display="flex" flexDir="column" w={12} h="100%" bg="rgba(0,0,0,0.08)">
      <Box pos="relative" bg="transparent" m="auto" mt={8} fontSize="22px" textAlign="center" lineHeight="1.5" mixBlendMode="difference" color="rgba(255,255,255,0.6)">
        {
          linesArr.map((line, k) => {
            return <Number number={line} key={k} />
          })
        }
      </Box>
    </Box>
  )
}

export default LineNumber;
