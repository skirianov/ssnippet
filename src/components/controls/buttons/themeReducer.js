import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    name: 'mac',
    mainBgColor: 'lightblue',
    textAreaBg: 'black',
    lineNumber: 'rgba(0,0,0,0.1)',
    lineNumberChar: 'steelblue',
    btnsBackgroundColor: '#15141B',
    btnsBorderRadius: 8,
    btnPosition: 'flex-start',
    btnsDirection: 'flex-row',
    btnsPadding: 2,
    btnStyle: {
      shape: {
        width: '0.8rem',
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
    changeToWin: state => {
      state.value = {
        ...state.value,
        name: 'win',
        btnsBorderRadius: 0,
        btnsPosition: 'flex-start',
        btnsDirection: 'row-reverse',
        btnsPadding: 2,
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
    changeToLin: state => {
      state.value = {
        ...state.value,
        name: 'lin',
        btnsBorderRadius: 10,
        btnsPosition: 'flex-start',
        btnsDirection: 'row-reverse',
        btnsPadding: 2,
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
    changeToMac: state => {
      state.value = {
        ...state.value,
        name: 'mac',
        btnsBorderRadius: 10,
        btnPosition: 'flex-start',
        btnsDirection: 'flex-row',
        btnsPadding: 2,
        btnStyle: {
          shape: {
            width: '1rem',
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
      state.value = {
        ...state.value,
        btnsBackgroundColor: action.payload,
      };
    },
    changeTextAreaColor: (state, action) => {
      state.value = {
        ...state.value,
        textAreaBg: action.payload,
      };
    },
    changeMainColor: (state, action) => {
      state.value = {
        ...state.value,
        mainBgColor: action.payload,
      };
    },
    changeTokens: (state, action) => {
      state.value = {
        ...state.value,
        tokens: action.payload,
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
} = themeSlicer.actions;

export default themeSlicer.reducer;

export const selectTheme = state => state.value;
