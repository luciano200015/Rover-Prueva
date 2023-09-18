import React from 'react';

function Rover({ x, y, orientation,color }) {

  
  const roverStyle = {
    position: 'absolute',
    left: `${x * 50}px`,
    top: `${y * 50}px`,
    width: '50px', 
    height: '50px',
    backgroundColor: 'blue', 
    transform: `rotate(${orientation === 'N' ? 0 : orientation === 'E' ? 90 : orientation === 'S' ? 180 : 270}deg)`,
  };

  return <div style={roverStyle}>
            <div style={{backgroundColor:color,width:'100%',height:'30%'}}>

            </div>
         </div>;
}

export default Rover;
