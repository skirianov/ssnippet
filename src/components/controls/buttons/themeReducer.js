import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
      name: 'mac',
      mainBgColor: 'lightblue',
      textAreaBg: 'black',
      lineNumber: '#2A112A',
      lineNumberChar: 'steelblue',
      btnsBackgroundColor: 'pink',
      btnsBorderRadius: '10',
      btnPosition: 'flex-start',
      btnsDirection: 'flex-row',
      btnsPadding: '1px',
      btnStyle: {
        shape: {
          width: '1.1rem',
          margin: '0.2rem',
          backgroundColor: {
            close: '#ff605c',
            min: '#ffbd44',
            res: '#00ca4e',
          },
          borderRadius: '100%',
        }
      },
      tokens: {
        text: '#DEDEDE',
        cursor: '#9F9F9F',
        selBrWord: '#424242',
        activeLine: '#2A2A2A',
        keywords: 'tomato',
        punctuation: '#fff',
        constants: '#AE81FF',
        function: '#66D9EF',
        types: '#66D9EF',
        entities: '#7AA6DA',
        variable: '#FD971F',
        string: '#E6DB74',
        comment: '#75715E',
        bracket: '#090',
        operator: 'deeppink',
        parameter: '#E78C45',
      }
    }
}

export const themeSlicer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
  changeToWin: state => {
    state.value = {
      ...state.value,
      name: 'win',
      btnsBorderRadius: '0',
      btnsPosition: 'flex-start',
      btnsDirection: 'row-reverse',
      btnsPadding: '4px',
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
        }
      }
    }
  },
  changeToLin: state => {
    state.value = {
      ...state.value,
      name: 'lin',
      btnsBorderRadius: '10',
      btnsPosition: 'flex-start',
      btnsDirection: 'row-reverse',
      btnsPadding: '3px',
      btnStyle: {
        shape: {
          width: '1.5rem',
          margin: '2px',
          backgroundColor: {
            close: '#df4a16',
            min: 'transparent',
            res: 'transparent',
          },
          borderRadius: '100%',
        }
      }
    }
  },
  changeToMac: state => {
    state.value = {
      ...state.value,
      name: 'mac',
      btnsBorderRadius: '10',
      btnPosition: 'flex-start',
      btnsDirection: 'flex-row',
      btnsPadding: '1px',
      btnStyle: {
        shape: {
          width: '1.1rem',
          margin: '0.2rem',
          backgroundColor: {
            close: '#ff605c',
            min: '#ffbd44',
            res: '#00ca4e',
          },
          borderRadius: '100%',
        }
      }
    };
  },
  changeHeaderColor: (state, action) => {
    state.value = {
      ...state.value,
      btnsBackgroundColor: action.payload,
    }
  },
  changeTextAreaColor: (state, action) => {
    state.value = {
      ...state.value,
      textAreaBg: action.payload,
    }
  },
  changeMainColor: (state, action) => {
    state.value = {
      ...state.value,
      mainBgColor: action.payload,
    }
  },
  changeTokens: (state, action) => {
    state.value = {
      ...state.value,
      tokens: action.payload,
    }
  }
  }
})

export const { 
  changeToLin, 
  changeToWin, 
  changeToMac, 
  changeHeaderColor, 
  changeTextAreaColor,
  changeMainColor,
  changeTokens } = themeSlicer.actions

export default themeSlicer.reducer

export const selectTheme = state => state.value;
