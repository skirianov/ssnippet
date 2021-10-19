import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import AceEditor from 'react-ace';
import hljs from 'highlight.js';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/ext-language_tools';
// import 'ace-builds/src-noconflict/mode-abap';
// import 'ace-builds/src-noconflict/mode-assembly_x86';
// import 'ace-builds/src-noconflict/mode-c_cpp';
// import 'ace-builds/src-noconflict/mode-csharp';
// import 'ace-builds/src-noconflict/mode-clojure';
// import 'ace-builds/src-noconflict/mode-cobol';
// import 'ace-builds/src-noconflict/mode-d';
// import 'ace-builds/src-noconflict/mode-dart';
// import 'ace-builds/src-noconflict/mode-dockerfile';
// import 'ace-builds/src-noconflict/mode-elixir';
// import 'ace-builds/src-noconflict/mode-erlang';
// import 'ace-builds/src-noconflict/mode-fortran';
// import 'ace-builds/src-noconflict/mode-golang';
// import 'ace-builds/src-noconflict/mode-haml';
// import 'ace-builds/src-noconflict/mode-haskell';
// import 'ace-builds/src-noconflict/mode-java';
// import 'ace-builds/src-noconflict/mode-json';
// import 'ace-builds/src-noconflict/mode-julia';
// import 'ace-builds/src-noconflict/mode-kotlin';
// import 'ace-builds/src-noconflict/mode-latex';
// import 'ace-builds/src-noconflict/mode-lua';
// import 'ace-builds/src-noconflict/mode-markdown';
// import 'ace-builds/src-noconflict/mode-matlab';
// import 'ace-builds/src-noconflict/mode-mysql';
// import 'ace-builds/src-noconflict/mode-nginx';
// import 'ace-builds/src-noconflict/mode-nim';
// import 'ace-builds/src-noconflict/mode-nix';
// import 'ace-builds/src-noconflict/mode-objectivec';
// import 'ace-builds/src-noconflict/mode-pascal';
// import 'ace-builds/src-noconflict/mode-perl';
// import 'ace-builds/src-noconflict/mode-php';
// import 'ace-builds/src-noconflict/mode-php_laravel_blade';
// import 'ace-builds/src-noconflict/mode-powershell';
// import 'ace-builds/src-noconflict/mode-qml';
// import 'ace-builds/src-noconflict/mode-r';
// import 'ace-builds/src-noconflict/mode-rust';
// import 'ace-builds/src-noconflict/mode-ruby';
// import 'ace-builds/src-noconflict/mode-sass';
// import 'ace-builds/src-noconflict/mode-scheme';
// import 'ace-builds/src-noconflict/mode-scss';
// import 'ace-builds/src-noconflict/mode-sql';
// import 'ace-builds/src-noconflict/mode-stylus';
// import 'ace-builds/src-noconflict/mode-svg';
// import 'ace-builds/src-noconflict/mode-swift';
// import 'ace-builds/src-noconflict/mode-typescript';
// import 'ace-builds/src-noconflict/mode-vbscript';
// import 'ace-builds/src-noconflict/mode-xml';
// import 'ace-builds/src-noconflict/mode-yaml';
// import 'ace-builds/src-noconflict/mode-javascript';
// import 'ace-builds/src-noconflict/mode-python';
// import 'ace-builds/src-noconflict/mode-css';
// import 'ace-builds/src-noconflict/mode-html';
// import 'ace-builds/src-noconflict/mode-django';

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
      } else if (language.language === 'bash') {
        setMode('batchfile');
      } else if (language.language === 'arm') {
        setMode('assembly_x86');
      } else {
        setMode(language.language);
      }
    }
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
