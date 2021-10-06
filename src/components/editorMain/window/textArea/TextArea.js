import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const TextArea = () => {
  const [code, setCode] = useState(`let a = null; //horosho \n //sdasdsa`);
  const theme = useSelector(state => state.theme.value);

  return (
    <Box 
      sx={{
        outline: 'none',
        ".comment": {
          color: theme.tokens.comments,
        },
        ".prolog": {
          color: theme.tokens.comments,
        },
        ".doctype": {
          color: theme.tokens.comments,
        },
        ".cdata": {
          color: theme.tokens.comments,
        },
        ".punctuation": {
          color: theme.tokens.punctuation,
        },
        ".property": {
          color: theme.tokens.properties,
        },
        ".tag": {
          color: theme.tokens.properties,
        },
        ".boolean": {
          color: theme.tokens.properties,
        },
        ".number": {
          color: theme.tokens.properties,
        },
        ".constant": {
          color: theme.tokens.properties,
        },
        ".symbol": {
          color: theme.tokens.properties,
        },
        ".deleted": {
          color: theme.tokens.properties,
        },
        ".function": {
          color: theme.tokens.functions,
        },
        ".class-name": {
          color: theme.tokens.functions,
        },
        ".keyword": {
          color: theme.tokens.keywords,
        },
        ".atrule": {
          color: theme.tokens.keywords,
        },
        ".attr-value": {
          color: theme.tokens.keywords,
        },
        ".operator": {
          color: theme.tokens.operators,
        },
        ".entity": {
          color: theme.tokens.operators,
        },
        ".url": {
          color: theme.tokens.operators,
        },
        ".string": {
          color: theme.tokens.strings,
        },
        ".char": {
          color: theme.tokens.strings,
        },
        ".builtin": {
          color: theme.tokens.strings,
        },
        ".selector": {
          color: theme.tokens.strings,
        },
        ".attr-name": {
          color: theme.tokens.strings,
        },
        ".variable": {
          color: theme.tokens.variables,
        },
        ".important": {
          color: theme.tokens.variables,
        },
        ".regex": {
          color: theme.tokens.variables,
        },
        "#textArea": {
          outline: 'none',
        }
      }}
      color="#f8f8f2"
    >
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={text => Prism.highlight(text, Prism.languages.js)}
        padding={34}
        textareaId="textArea"
        style={{
          position: 'relative',
          backgroundColor: 'transparent',
          fontSize: 22,
          fontFamily: 'Open Sans',
          fontWeight: 600,
          outline: 'none!important',
          height: '100%',
          width: '62vw',
        }}
        />
    </Box>
  )
}

export default TextArea;
