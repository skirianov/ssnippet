import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-snippets";
import "ace-builds/src-noconflict/ace";

const TextArea = () => {
  const [code, setCode] = useState(`let a = null; //horosho`);
  const theme = useSelector(state => state.theme.value);
  const [fontSize, setFontSize] = useState(22);
  const [width, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width);

    if (width < 768) {
      setFontSize(15);
    } else {
      setFontSize(22);
    }
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
  }, []);


  return (
    <Box
      width="100%"
      padding={2}
      sx={{
        ".ace_active-line": {
          backgroundColor: `${theme.tokens.activeLine} !important`,
        },
        ".ace_gutter": {
          backgroundColor: 'transparent !important',
          color: theme.lineNumberChar,
        },
        ".ace_gutter-cell": {
          paddingRight: '10px'
        },
        ".ace_print-margin": {
          width: 0,
        },
        ".ace_gutter-active-line": {
          backgroundColor: `${theme.lineNumber} !important`,
          color: theme.lineNumberChar,
        },
        ".ace_mobile-menu": {
          display: 'none',
        },
        ".ace_cursor": {
          color: theme.tokens.cursor,
        },
        ".ace_selection": {
          backgroundColor: `${theme.tokens.selBrWord} !important`,
        },
        ".ace_bracket": {
          backgroundColor: theme.tokens.bracket,
        },
        ".ace_keyword": {
          color: theme.tokens.keywords,
        },
        ".ace_meta": {
          color: theme.tokens.keywords,
        },
        ".ace_storage": {
          color: theme.tokens.keywords,
        },
        ".ace_type": {
          color: theme.tokens.keywords,
        },
        ".ace_paren": {
          color: theme.tokens.selBrWord,
        },
        ".ace_entity": {
          color: theme.tokens.entities,
        },
        ".ace_comment": {
          color: theme.tokens.comment,
        },
        ".string": {
          color: theme.tokens.string,
        },
        ".ace_operator": {
          color: theme.tokens.operator,
        },
        

      }}
    >
      <AceEditor
        mode="javascript"
        theme={null}
        onChange={code => setCode(code)}
        name="textArea"
        fontSize={fontSize}
        editorProps={{ $blockScrolling: true }}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        width="98%"
        placeholder="Your awesome code snippet here <3"
        wrapEnabled={true}
        style={{
          backgroundColor: 'transparent',
          fontFamily: 'monospace',
          fontWeight: 500,
          color: theme.tokens.text,
        }}
      />
    </Box>
  )
}

export default TextArea;