import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeToLin, changeToMac, changeToWin } from './themeReducer';

const Button = styled.button`
  width: 8rem;
  height: 2.8rem;
  margin: 0.6rem;
  background-color: #0b0d1f;
  color: white;
  border-style: double;
  border: 2px solid white;
  font-size: 1.2rem;
  font-weight: 200;
  
  /* &:hover {
    background-color: #262c63;
    transform: scale(1.05);
    transition: transform .2s ease-in;
  } */
`


const Buttons = ({text}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);

  const action = text === 'win' ? changeToWin : text === 'lin' ? changeToLin : changeToMac;

  return (
    <Button onClick={() => console.log(dispatch(action()))}>
      {text}
    </Button>
  )
}

export default Buttons;
