const sx = (theme) => ({
  '.ace_active-line': {
    backgroundColor: `${theme.tokens.activeLine} !important`,
  },
  '.ace_gutter': {
    backgroundColor: 'transparent !important',
    color: theme.lineNumberChar,
  },
  '.ace_gutter-cell': {
    paddingLeft: '6px',
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
    color: `${theme.tokens.meta} !important`,
  },
  '.ace_storage': {
    color: `${theme.tokens.keywords} !important`,
  },
  '.ace_type': {
    color: `${theme.tokens.types} !important`,
  },
  '.ace_rparen': {
    color: `${theme.tokens.activeLine} !important`,
  },
  '.ace_paren': {
    color: `${theme.tokens.bracket} !important`,
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
    color: `${theme.tokens.identifier} !important`,
  },
  '.ace_parameter': {
    color: `${theme.tokens.parameter} !important`,
  },
  '.ace_constant': {
    color: `${theme.tokens.constants} !important`,
  },
  '.ace_numeric': {
    color: `${theme.tokens.number} !important`,
  },
  '.ace_attribute-name': {
    color: `${theme.tokens.attribute} !important`,
  },
  '.ace_color': {
    color: `${theme.tokens.parameter} !important`,
  },
  '.ace_variable': {
    color: `${theme.tokens.variable} !important`,
  },
});

export default sx;
