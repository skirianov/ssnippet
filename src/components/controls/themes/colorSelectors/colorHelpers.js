const handleHeaderChange = (color) => {
  setHeaderColor(color.hex);
  dispatch(changeHeaderColor(color.hex));
}

const handleTextAreaChange = (color) => {
  setTextAreaColor(color.hex);
  dispatch(changeTextAreaColor(color.hex));
}

const handleMainBgChange = (color) => {
  setMainBgColor(color.hex);
  dispatch(changeMainColor(color.hex));
}

const handleTokensChange = (color) => {
  setTokens({...tokens, [radio]: color.hex})
  dispatch(changeTokens(tokens));
}  

const colorHelpers = {
  handleHeaderChange,
  handleMainBgChange,
  handleTextAreaChange,
  handleTokensChange,
};

export default colorHelpers;
