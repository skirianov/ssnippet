import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';

const ThemeControls = ({color, handler, text}) => {
  return (
    <div>
      <p style={{color: 'red'}}>{text}</p>
      <ChromePicker disableAlpha color={color} onChange={handler}/>
    </div>
  )
}

export default ThemeControls;
