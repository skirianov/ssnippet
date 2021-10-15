  const sx = (theme) => {
    return {
    '.ace_active-line': {
      backgroundColor: `${theme.tokens.activeLine} !important`,
    },
    '.ace_gutter': {
      backgroundColor: 'transparent !important',
      color: theme.lineNumberChar,
    },
    '.ace_gutter-cell': {
      paddingRight: '10px',
    },
    '.ace_print-margin': {
      width: 0,
    },
    '.ace_gutter-active-line': {
      backgroundColor: `${theme.lineNumber} !important`,
      color: theme.lineNumberChar,
    },
    '.ace_mobile-menu': {
      display: 'none',
    },
    '.ace_cursor': {
      color: theme.tokens.cursor,
    },
    '.ace_selection': {
      backgroundColor: `${theme.tokens.selBrWord} !important`,
    },
    '.ace_bracket': {
      backgroundColor: theme.tokens.bracket,
    },
    '.ace_keyword': {
      color: `${theme.tokens.keywords} !important`,
    },
    '.ace_meta': {
      color: `${theme.tokens.keywords} !important`,
    },
    '.ace_storage': {
      color: `${theme.tokens.keywords} !important`,
    },
    '.ace_type': {
      color: `${theme.tokens.keywords} !important`,
    },
    '.ace_paren': {
      color: `${theme.tokens.selBrWord} !important`,
    },
    '.ace_comment': {
      color: `${theme.tokens.comment} !important`,
    },
    '.ace_string': {
      color: `${theme.tokens.string} !important`,
    },
    '.ace_operator': {
      color: `${theme.tokens.operator} !important`,
    },
    '.ace-punctuation': {
      color: `${theme.tokens.operator} !important`,
    },
    '.ace_function': {
      color: `${theme.tokens.function} !important`,
    },
    '.ace_identifier': {
      color: `${theme.tokens.variable} !important`
    },
    '.ace_parameter': {
      color: `${theme.tokens.parameter} !important`
    },
    '.ace_numberic': {
      color: `${theme.tokens.number} !important`
    },
    '.ace_constant': {
      color: `${theme.tokens.number} !important`
    }
  }};

  export default sx;
