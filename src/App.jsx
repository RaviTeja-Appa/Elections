import React from 'react'
import ReactDOM from "react-dom";
import ScheduleButtons from './components/ScheduleButtons/ScheduleButtons';
import Dropdown from './components/Dropdown/Dropdown';
import StyledSpeedDial from './components/SpeedDial/StyledSpeedDial';
import LiabilitiesVisualization from './components/Map/Maptest'

const App = () => {
  
  return (
    <div style={{display:"column"}}> 
    <div   className="page_heading">Elections Schedule</div>
    <StyledSpeedDial/>
    <div style={{display:"flex"}}>
  
    <div   style={{display:"flex"}}> 
    <LiabilitiesVisualization  />
  
    <br></br>

       

       
      
    </div>
    </div>
     
    </div>
  );
}

export default App;
