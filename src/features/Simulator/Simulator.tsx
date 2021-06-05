import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { getBeforeImg, getAfterImg} from './selectors';
import { CSSTransition } from 'react-transition-group';
import './simulator.css';
import Tooltip from '@material-ui/core/Tooltip';

export default function Simulator() {
  const beforeImg = useSelector(getBeforeImg)
  const afterImg = useSelector(getAfterImg)
  const [showCurrentImg, setCurrentImg] = useState(true)
  const [showTargetImg, setTargetImg] = useState(false)
 
  return (
  <div style={{padding: "2%", display: 'flex', justifyContent: 'center'}}>
    {showCurrentImg && (
      <Tooltip title="Current Body Shape">
        <img 
          src={ beforeImg } 
          alt="current" 
          aria-label="current"
          onClick={() => setTargetImg(true)}
        />
      </Tooltip>
      
    ) }
    <CSSTransition
        in={showTargetImg}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setCurrentImg(false)}
        onExited={() => setCurrentImg(true)}
      >
      <Tooltip title="Target Body Shape">
        <img 
          src={ afterImg } 
          alt="goal" 
          aria-label="current"
          onClick={() => setTargetImg(false)}
        />
      </Tooltip>
      </CSSTransition>
   
  </div>)
};
