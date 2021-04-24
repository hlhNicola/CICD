import React, { useEffect} from 'react';

export default function Simulator() {
  
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://modelmydiet.com/assets/js/widget_loader_v8.js";
  
    // For body
    document.body.appendChild(script);
  }, [])
 
  return (
  <div style={{padding: "2%"}}>
    <div className="mmd-model-widget" data-key="Mvc8a0UyzQaO7m_Vkwp3yg" data-gender="women"></div>
  </div>)
};
