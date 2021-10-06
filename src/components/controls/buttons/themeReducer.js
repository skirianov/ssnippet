import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
      name: 'mac',
      mainBgColor: 'lightblue',
      textAreaBg: '#282a36',
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
        comments: '#6272a4',
        punctuation: '#f8f8f2',
        properties: '#126782',
        strings: '#50fa7b',
        operators: '#ffb86c',
        keywords: '#ff79c6',
        functions: '#ff5555',
        variables: '#bdb2ff',
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
      btnsPadding: '3px',
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
      btnsPadding: '4px',
      btnStyle: {
        shape: {
          width: '1.3rem',
          margin: '4px',
          backgroundColor: {
            close: 'transparent',
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
