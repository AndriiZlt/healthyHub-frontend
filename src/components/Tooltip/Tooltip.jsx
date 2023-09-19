import React, { useState } from 'react';
import css from './Tooltip.module.css';

function Tooltip({ text, children }) {
  const [isVisible, setIsVisible] = useState(false);

//   const showTooltip = () => {
//     setIsVisible(true);
//   };

//   const hideTooltip = () => {
//     setIsVisible(false);
    //     };
  const toggleTooltip = () => {
    setIsVisible(!isVisible);
  };
    
  return (
      <div className={css.tooltipContainer} onClick={toggleTooltip}>
      {children}
      {isVisible && <div className={css.tooltip}>{text}</div>}
    </div>
  );
}

export default Tooltip;