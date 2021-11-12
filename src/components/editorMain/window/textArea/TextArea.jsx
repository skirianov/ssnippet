import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import AceEditor from 'react-ace';
import hljs from 'highlight.js';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/ext-language_tools';

import sx from './selectors';
import LANGUAGES from './LANGUAGES';

const TextArea = () => {
  const theme = useSelector((state) => state.theme.value);
  const [code, setCode] = useState(null);
  const [mode, setMode] = useState('javascript');
  const height = window.innerHeight;
  const [fontSize, setFontSize] = useState(18);

  const updateDimensions = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setFontSize(15);
    } else {
      setFontSize(18);
    }
  };

  useEffect(() => {
    if (code) {
      const language = (hljs.highlightAuto(code, LANGUAGES));
      if (language.language === 'c' || language.language === 'cpp') {
        setMode('c_cpp');
      } else if (language.language === 'arm') {
        setMode('assembly_x86');
      } else {
        setMode(language.language);
      }
    }
    console.log(mode);
  }, [code, mode]);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
  }, []);

  return (
    <Box width="100%" padding={2} sx={sx(theme)} minH={height * 0.4}>
      <AceEditor
        onChange={(inputCode) => setCode(inputCode)}
        debounceChangePeriod={100}
        mode={mode || 'javascript'}
        theme={null}
        name="textArea"
        fontSize={fontSize}
        enableBasicAutocompletion
        enableLiveAutocompletion
        width="96%"
        placeholder="Your awesome code snippet here <3"
        wrapEnabled
        maxLines={Infinity}
        style={{
          backgroundColor: 'transparent',
          fontFamily: 'monospace',
          fontWeight: 500,
          color: theme.tokens.text,
        }}
        setOptions={{ useWorker: false }}
      />
    </Box>
  );
};

export default TextArea;
