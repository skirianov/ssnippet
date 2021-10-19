import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    name: 'mac',
    mainBgColor: 'lightblue',
    textAreaBg: 'black',
    lineNumber: 'rgba(0,0,0,0.1)',
    lineNumberChar: 'steelblue',
    btnsBackgroundColor: 'linear-gradient(#e5e5e5, #cecece)',
    btnsBorderRadius: 15,
    btnPosition: 'flex-start',
    btnsDirection: 'flex-row',
    btnsPadding: 1,
    color: 'black',
    btnStyle: {
      shape: {
        width: 4,
        margin: '0.3rem',
        backgroundColor: {
          close: '#ff605c',
          min: '#00ca4e',
          res: '#ff924d',
        },
        borderRadius: '100%',
      },
    },
    tokens: {
      text: '#DEDEDE',
      cursor: '#9F9F9F',
      selBrWord: '#424242',
      activeLine: 'rgba(255,255,255,0.1)',
      keywords: 'tomato',
      constants: '#AE81FF',
      function: '#66D9EF',
      types: '#66D9EF',
      variable: '#FD971F',
      string: '#E6DB74',
      comment: '#75715E',
      bracket: '#090',
      operator: 'deeppink',
      parameter: '#E78C45',
      number: '#E78C45',
    },
  },
};

export const themeSlicer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeToWin: (state) => {
      const newState = state;
      newState.value = {
        ...state.value,
        name: 'win',
        btnsBorderRadius: 0,
        btnsPosition: 'flex-start',
        btnsDirection: 'row-reverse',
        btnsPadding: 1,
        btnStyle: {
          shape: {
            width: '2.5rem',
            margin: '0',
            backgroundColor: {
              close: 'transparent',
              min: 'transparent',
              res: 'transparent',
            },
            borderRadius: '0',
          },
        },
      };
    },
    changeToLin: (state) => {
      const newState = state;
      newState.value = {
        ...state.value,
        name: 'lin',
        btnsBorderRadius: 10,
        btnsPosition: 'flex-start',
        btnsDirection: 'row-reverse',
        btnsPadding: 1,
        btnStyle: {
          shape: {
            width: '1.4rem',
            margin: '2px',
            backgroundColor: {
              close: '#df4a16',
              min: 'transparent',
              res: 'transparent',
            },
            borderRadius: '100%',
          },
        },
      };
    },
    changeToMac: (state) => {
      const newState = state;
      newState.value = {
        ...state.value,
        name: 'mac',
        btnsBorderRadius: 15,
        btnPosition: 'flex-start',
        btnsDirection: 'flex-row',
        btnsPadding: 1,
        btnStyle: {
          shape: {
            width: 4,
            margin: '0.3rem',
            backgroundColor: {
              close: '#ff605c',
              min: '#00ca4e',
              res: '#ff924d',
            },
            borderRadius: '100%',
          },
        },
      };
    },
    changeHeaderColor: (state, action) => {
      const newState = state;
      newState.value = {
        ...state.value,
        btnsBackgroundColor: action.payload,
      };
    },
    changeTextAreaColor: (state, action) => {
      const newState = state;
      newState.value = {
        ...state.value,
        textAreaBg: action.payload,
      };
    },
    changeMainColor: (state, action) => {
      const newState = state;
      newState.value = {
        ...state.value,
        mainBgColor: action.payload,
      };
    },
    changeTokens: (state, action) => {
      const newState = state;
      newState.value = {
        ...state.value,
        tokens: action.payload,
      };
    },
    changeName: (state, action) => {
      const newState = state;
      newState.value = {
        ...state.value,
        heading: action.payload,
      };
    },
    changeTheme: (state, action) => {
      const { payload } = action;

      const newState = state;
      newState.value = {
        ...state.value,
        textAreaBg: payload.textAreaBg,
        lineNumber: payload.lineNumber,
        lineNumberChar: payload.lineNumberChar,
        tokens: payload.tokens,
        btnsBackgroundColor: payload.btnsBackgroundColor,
        color: payload.color,
      };
    },
  },
});

export const {
  changeToLin,
  changeToWin,
  changeToMac,
  changeHeaderColor,
  changeTextAreaColor,
  changeMainColor,
  changeTokens,
  changeName,
  changeTheme,
} = themeSlicer.actions;

export default themeSlicer.reducer;

export const selectTheme = (state) => state.value;
