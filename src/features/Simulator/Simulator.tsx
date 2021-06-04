import React from 'react';
import { useSelector } from 'react-redux';
import { getBeforeImg, getAfterImg} from './selectors';

export default function Simulator() {
  const beforeImg = useSelector(getBeforeImg)
  const afterImg = useSelector(getAfterImg)
 
  return (
  <div style={{padding: "2%"}}>
    <img src={ beforeImg } alt="current" />
    <img src={ afterImg } alt="goal" />
  </div>)
};
